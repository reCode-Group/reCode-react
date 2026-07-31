import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || "help@recode-group.ru";
const DEVICE_COOKIE = "support_device_id";
const RATE_LIMIT_WINDOW_MS = 2 * 60 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

type SupportPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  website?: unknown;
};

type RateLimitStore = Map<string, number[]>;

declare global {
  // eslint-disable-next-line no-var
  var supportRateLimitStore: RateLimitStore | undefined;
}

const rateLimitStore = globalThis.supportRateLimitStore ?? new Map<string, number[]>();
globalThis.supportRateLimitStore = rateLimitStore;

function jsonResponse(
  body: { ok: boolean; message: string },
  status: number,
  deviceId: string,
) {
  const response = NextResponse.json(body, { status });

  response.cookies.set(DEVICE_COOKIE, deviceId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return realIp?.trim() || "unknown";
}

function pruneTimestamps(timestamps: number[], now: number) {
  return timestamps.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
}

function isLimited(keys: string[], now: number) {
  return keys.some((key) => {
    const timestamps = pruneTimestamps(rateLimitStore.get(key) ?? [], now);
    rateLimitStore.set(key, timestamps);
    return timestamps.length >= RATE_LIMIT_MAX;
  });
}

function recordSuccessfulSend(keys: string[], now: number) {
  keys.forEach((key) => {
    const timestamps = pruneTimestamps(rateLimitStore.get(key) ?? [], now);
    timestamps.push(now);
    rateLimitStore.set(key, timestamps);
  });
}

function validateEmail(email: string) {
  if (!email) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;

  if (!host || !port || !user || !pass || !from) {
    throw new Error("SMTP is not configured");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: NextRequest) {
  const deviceId = request.cookies.get(DEVICE_COOKIE)?.value || crypto.randomUUID();
  const ip = getClientIp(request);

  let payload: SupportPayload;

  try {
    payload = (await request.json()) as SupportPayload;
  } catch {
    return jsonResponse(
      { ok: false, message: "Некорректный формат запроса." },
      400,
      deviceId,
    );
  }

  const name = readString(payload.name);
  const email = readString(payload.email);
  const phone = readString(payload.phone);
  const message = readString(payload.message);
  const website = readString(payload.website);

  if (website) {
    return jsonResponse(
      { ok: true, message: "Заявка отправлена." },
      200,
      deviceId,
    );
  }

  if (!name || !phone || !message) {
    return jsonResponse(
      { ok: false, message: "Заполните имя, телефон и сообщение." },
      400,
      deviceId,
    );
  }

  if (!validateEmail(email)) {
    return jsonResponse(
      { ok: false, message: "Укажите корректный email или оставьте поле пустым." },
      400,
      deviceId,
    );
  }

  const now = Date.now();
  const rateLimitKeys = [`device:${deviceId}`, `ip:${ip}`];

  if (isLimited(rateLimitKeys, now)) {
    return jsonResponse(
      { ok: false, message: "Слишком много заявок. Попробуйте снова через 2 часа." },
      429,
      deviceId,
    );
  }

  try {
    const transport = getTransport();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email || "не указан");
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transport.sendMail({
      from: process.env.SMTP_FROM,
      to: SUPPORT_EMAIL,
      replyTo: email || undefined,
      subject: `Заявка в техподдержку от ${name}`,
      text: [
        `Имя: ${name}`,
        `Email: ${email || "не указан"}`,
        `Телефон: ${phone}`,
        `IP: ${ip}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>Новая заявка</h2>
        <p><strong>Имя:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Телефон:</strong> ${safePhone}</p>
        <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    recordSuccessfulSend(rateLimitKeys, now);

    return jsonResponse(
      { ok: true, message: "Заявка отправлена." },
      200,
      deviceId,
    );
  } catch (error) {
    console.error("Support email send failed", error);

    return jsonResponse(
      { ok: false, message: "Не удалось отправить заявку. Попробуйте позже." },
      500,
      deviceId,
    );
  }
}
