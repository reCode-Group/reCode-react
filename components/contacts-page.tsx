"use client";

import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const COMPANY_CONTACTS = {
  name: 'ООО "Рекод Решения"',
  phone: "+7 (987) 147-09-44",
  email: "info@recode-group.ru",
  address: "г. Уфа",
  workHours: "Пн-Пт: 09:00 - 18:00 (МСК)",
};

const SUPPORT_CONTACTS = {
  phone: "+7 (800) 777-10-10",
  email: "help@recode-group.ru",
  workHours: "Ежедневно: 08:00 - 22:00 (МСК)",
  sla: "Среднее время ответа в рабочие часы - до 1 часа.",
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

type ContactItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
  accent?: boolean;
};

function ContactItem({ icon, label, value, accent = false }: ContactItemProps) {
  return (
    <div className="grid grid-cols-[20px_1fr] gap-3">
      <div className="accent-icon mt-0.5 flex h-5 w-5 items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="theme-label text-[11px] font-semibold uppercase tracking-[0.24em]">
          {label}
        </p>
        <p className={`mt-1 text-sm leading-6 ${accent ? "accent-link" : "theme-heading"}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

function ContactIconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M6.62 10.79a15.06 15.06 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.13.37 2.33.56 3.58.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.45.56 3.58a1 1 0 0 1-.25 1.01l-2.19 2.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactIconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactIconMap() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ContactIconClock() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactsPage() {
  const supportRef = useRef<HTMLElement | null>(null);
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM);

  useEffect(() => {
    if (window.location.hash !== "#support") return;

    requestAnimationFrame(() => {
      supportRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const handleFieldChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="relative isolate">
      <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="testimonial-card mb-6 overflow-hidden rounded-[28px] px-5 py-8 sm:px-8 md:mb-8 md:px-10 md:py-10">
            <h1 className="theme-display-title max-w-3xl font-nacelle text-4xl font-semibold md:text-5xl">
              Свяжитесь с нами
            </h1>
            <p className="theme-muted mt-5 max-w-3xl text-base leading-7 md:text-lg">
              Оставьте заявку через форму, напишите на корпоративную почту или
              обратитесь в техподдержку. Мы поможем с вопросами по платформе и
              сопровождению макросов.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <article className="testimonial-card rounded-[28px] p-6 md:p-8">
                <h2 className="theme-heading font-nacelle text-2xl font-semibold md:text-3xl">
                  О компании
                </h2>
                <div className="mt-6 space-y-5">
                  <p className="theme-heading text-base font-semibold md:text-lg">
                    {COMPANY_CONTACTS.name}
                  </p>
                  <ContactItem
                    icon={<ContactIconPhone />}
                    label="Телефон"
                    value={COMPANY_CONTACTS.phone}
                  />
                  <ContactItem
                    icon={<ContactIconMail />}
                    label="Email"
                    value={COMPANY_CONTACTS.email}
                    accent
                  />
                  <ContactItem
                    icon={<ContactIconMap />}
                    label="Адрес"
                    value={COMPANY_CONTACTS.address}
                  />
                  <ContactItem
                    icon={<ContactIconClock />}
                    label="График"
                    value={COMPANY_CONTACTS.workHours}
                  />
                </div>
              </article>

              <article
                ref={supportRef}
                id="support"
                className="testimonial-card scroll-mt-32 rounded-[28px] p-6 md:p-8"
              >
                <h2 className="theme-heading font-nacelle text-2xl font-semibold md:text-3xl">
                  Техническая поддержка
                </h2>
                <div className="mt-6 space-y-5">
                  <ContactItem
                    icon={<ContactIconMail />}
                    label="Email поддержки"
                    value={SUPPORT_CONTACTS.email}
                    accent
                  />
                  <ContactItem
                    icon={<ContactIconClock />}
                    label="Часы работы"
                    value={SUPPORT_CONTACTS.workHours}
                  />
                  <p className="theme-muted text-sm leading-6">{SUPPORT_CONTACTS.sla}</p>
                </div>
              </article>
            </div>

            <aside className="testimonial-card h-fit rounded-[28px] p-6 lg:sticky lg:top-32 md:p-8">
              <h2 className="theme-heading font-nacelle text-2xl font-semibold md:text-3xl">
                Форма обратной связи
              </h2>
              <p className="theme-muted mt-3 text-sm leading-6">
                Демонстрационный режим: форма пока без отправки на сервер.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="theme-heading mb-2 block text-sm font-medium">Имя*</span>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={handleFieldChange("name")}
                    className="form-input w-full"
                  />
                </label>

                <label className="block">
                  <span className="theme-heading mb-2 block text-sm font-medium">Email</span>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={handleFieldChange("email")}
                    className="form-input w-full"
                  />
                </label>

                <label className="block">
                  <span className="theme-heading mb-2 block text-sm font-medium">Телефон*</span>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={handleFieldChange("phone")}
                    className="form-input w-full"
                  />
                </label>

                <label className="block">
                  <span className="theme-heading mb-2 block text-sm font-medium">
                    Сообщение*
                  </span>
                  <textarea
                    value={formState.message}
                    onChange={handleFieldChange("message")}
                    className="form-textarea min-h-36 w-full resize-y"
                  />
                </label>

                <button type="submit" className="btn btn-primary w-full sm:w-auto">
                  Отправить
                </button>
              </form>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
