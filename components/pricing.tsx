const pricingCards = [
  {
    id: 1,
    title: "Базовый",
    price: "1 000",
    postfix: "₽ / мес.",
    items: ["3 000 токенов", "Базовая поддержка", "Базовый"],
  },
  {
    id: 2,
    title: "Стандартный",
    price: "3 000",
    postfix: "₽ / мес.",
    items: [
      "10 000 токенов",
      "Базовая поддержка",
      "Базовый",
      "Базовый",
    ],
    highlight: true,
  },
  {
    id: 3,
    title: "Премиум",
    price: "25 000",
    postfix: "₽ / мес.",
    items: ["25 000 токенов", "Базовая поддержка", "Расширенная поддержка"],
  },
];

export default function Pricing() {
  return (
    <section className="relative isolate">
      <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
        <div className="section-divider py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-14">
            <div className="theme-eyebrow-lines inline-flex items-center gap-3 pb-3 before:h-px before:w-8 after:h-px after:w-8">
              <span className="theme-eyebrow inline-flex">Доступные пакеты</span>
            </div>
            <h2 className="theme-display-title animate-[gradient_6s_linear_infinite] pb-4 font-nacelle text-3xl font-semibold md:text-4xl">
              Тарифы
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricingCards.map((card) => (
              <article
                key={card.id}
                className={`rounded-3xl p-5 ${
                  card.highlight
                    ? "border border-slate-600/70 bg-[linear-gradient(83deg,#313860_2.25%,#151928_79.87%)]"
                    : "testimonial-card"
                }`}
              >
                <div
                  className={`rounded-3xl p-5 ${
                    card.highlight ? "bg-white/5" : "bg-white dark:bg-slate-950/60"
                  }`}
                >
                  <div
                    className={`text-lg ${
                      card.highlight ? "text-white" : "theme-heading"
                    }`}
                  >
                    {card.title}
                  </div>
                  <div className="mt-3">
                    <p className="text-2xl font-bold">
                      <span className={card.highlight ? "text-white" : "theme-heading"}>
                        {card.price}
                      </span>{" "}
                      <span className="text-lg text-slate-400">{card.postfix}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className={`mt-4 inline-flex h-10 items-center justify-center rounded-xl px-5 text-xs font-bold uppercase tracking-[0.06em] ${
                      card.highlight
                        ? "bg-white text-slate-900"
                        : "btn btn-primary"
                    }`}
                  >
                    Выбрать
                  </button>
                </div>

                <ul
                  className={`mt-7 space-y-3 text-sm ${
                    card.highlight ? "text-white" : "theme-heading"
                  }`}
                >
                  {card.items.map((item, index) => (
                    <li key={`${card.id}-${index}`} className="flex items-center gap-2">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-[5px] bg-slate-300 text-[10px] text-slate-900">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="theme-muted mt-6 text-[11px] leading-[1.4]">
                  * Пояснения о тарифе в две строки небольшие, чтобы внести ясность
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
