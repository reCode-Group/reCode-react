"use client";

import Image from "next/image";

import ForBusinessIcon from "@/public/images/for-business.svg";
import ForItIcon from "@/public/images/for-it.svg";

const audienceCards = [
  {
    icon: ForBusinessIcon,
    iconAlt: "Для бизнеса",
    title: "Для бизнеса и специалистов",
    description:
      "Подходит для сотрудников, которым нужно автоматизировать работу с документами и макросами без глубоких технических знаний",
  },
  {
    icon: ForItIcon,
    iconAlt: "Для IT-команд",
    title: "Для разработчиков и IT-команд",
    description:
      "Используйте редактор кода и инструменты перевода для интеграции, доработки и миграции макросов между системами",
  },
];

export default function Testimonials() {
  return (
    <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
      <div className="section-divider py-12 md:py-20">
        <div className="pb-12 text-center">
          <h2 className="theme-display-title animate-[gradient_6s_linear_infinite] pb-4 font-nacelle text-3xl font-semibold md:text-4xl">
            Для кого этот сервис?
          </h2>
          <p className="theme-muted text-lg">
            Те, кто столкнулся с миграцией на отечественные офисные пакеты
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {audienceCards.map((card) => (
            <article
              key={card.title}
              className="testimonial-card rounded-3xl p-8 md:min-h-[280px]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80">
                <Image
                  src={card.icon}
                  alt={card.iconAlt}
                  className="h-7 w-7"
                />
              </div>
              <h3 className="theme-heading mt-5 text-2xl font-semibold">
                {card.title}
              </h3>
              <p className="theme-muted mt-5 text-base leading-7">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
