"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "recode-cookie-notice-accepted";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      setIsVisible(window.localStorage.getItem(CONSENT_STORAGE_KEY) !== "true");
    } catch {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, "true");
    } catch {
      // Keep the notification dismissed for the current page when storage is unavailable.
    }

    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      className="cookie-banner fixed right-4 bottom-4 left-4 z-50 max-w-2xl rounded-2xl p-4 shadow-xl shadow-slate-950/15 backdrop-blur-md sm:right-auto sm:bottom-6 sm:left-6 sm:flex sm:items-center sm:gap-5 sm:p-5"
      aria-label="Уведомление об использовании cookie"
    >
      <p className="theme-heading text-base leading-6">
        Используем{" "}
        <Link
          className="accent-link underline decoration-current/40 underline-offset-2 transition hover:decoration-current"
          href="/legal#recommendations"
        >
          рекомендательные технологии
        </Link>{" "}
        и{" "}
        <Link
          className="accent-link underline decoration-current/40 underline-offset-2 transition hover:decoration-current"
          href="/legal#privacy"
        >
          файлы куки
        </Link>
        .
      </p>
      <button
        className="btn btn-primary mt-4 w-full shrink-0 cursor-pointer sm:mt-0 sm:w-auto"
        type="button"
        onClick={acceptCookies}
      >
        Хорошо
      </button>
    </aside>
  );
}
