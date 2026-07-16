"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

const faqRows = [
  {
    id: "faq-1",
    question: "Сколько времени занимает перевод макроса?",
    answer:
      "Типовой макрос обычно обрабатывается за 1-3 минуты. Для крупных файлов время может увеличиваться до 10 минут.",
  },
  {
    id: "faq-2",
    question: "Какие офисные пакеты поддерживаются?",
    answer:
      "Поддерживаются Р7-Офис, МойОфис, Яндекс Документы, а также сценарии миграции из Microsoft Office.",
  },
  {
    id: "faq-3",
    question: "Нужны ли навыки программирования для работы?",
    answer:
      "Для базовых сценариев нет. Интерфейс рассчитан на специалистов без глубокого опыта разработки.",
  },
  {
    id: "faq-4",
    question: "Можно ли протестировать сервис до оплаты?",
    answer:
      "Да, доступен тестовый сценарий с ограничением по токенам, а именно не более 600 символов. Это достаточно, чтобы оценить качество перевода на реальных примерах.",
  },
  {
    id: "faq-5",
    question: "Что делать, если перевод получился некорректным?",
    answer:
      "Обратитесь в техподдержку через страницу «Контакты», или нажмите на кнопку «Некорректный макрос?» на странице «Переводчика макросов». Команда поможет разобрать кейс и предложит варианты улучшения результата.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative isolate">
      <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
        <div className="section-divider py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-14">
            <div className="theme-eyebrow-lines inline-flex items-center gap-3 pb-3 before:h-px before:w-8 after:h-px after:w-8">
              <span className="theme-eyebrow inline-flex">FAQ</span>
            </div>
            <h2 className="theme-display-title animate-[gradient_6s_linear_infinite] pb-4 font-nacelle text-3xl font-semibold md:text-4xl">
              Частые вопросы
            </h2>
            <p className="theme-muted text-lg">
              Собрали самое важное, остальное — можно спросить в техподдержке
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4">
            {faqRows.map((item) => (
              <Disclosure key={item.id} as="div" className="group">
                {({ open }) => (
                  <div className="testimonial-card overflow-hidden rounded-2xl backdrop-blur-xs transition-colors">
                    <DisclosureButton className="accent-focus flex w-full items-center justify-between gap-6 px-5 py-5 text-left focus-visible:outline-hidden md:px-6">
                      <span className="theme-heading font-nacelle text-lg font-semibold">
                        {item.question}
                      </span>
                      <span
                        className={`accent-fill shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10 4v12M4 10h12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel className="theme-muted px-5 pb-5 text-sm leading-6 md:px-6 md:text-base">
                      {item.answer}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
