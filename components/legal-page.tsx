import { LEGAL_DOCUMENTS } from "@/lib/legal-documents";

const documentLinks = LEGAL_DOCUMENTS.map((document) => ({
  href: `#${document.id}`,
  title: document.title,
  summary: document.summary,
}));

export default function LegalPage() {
  return (
    <section className="relative isolate">
      <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="testimonial-card mb-8 rounded-[28px] px-5 py-8 sm:px-8 md:px-10 md:py-10">
            <h1 className="theme-display-title mt-5 max-w-4xl font-nacelle text-4xl font-semibold md:text-5xl">
              Юридические документы
            </h1>
            <p className="theme-muted mt-5 max-w-3xl text-base leading-7 md:text-lg">
              На этой странице размещены основные документы сайта recode-group.ru:
              пользовательское соглашение, политика конфиденциальности, согласие
              на обработку персональных данных, публичная оферта и информация об
              использовании рекомендательных технологий.
            </p>
          </div>

          <nav
            className="testimonial-card mb-10 rounded-[28px] p-6 md:p-8"
            aria-label="Оглавление юридических документов"
          >
            <h2 className="theme-heading font-nacelle text-2xl font-semibold">
              Оглавление
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {documentLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-sky-400/40 hover:bg-white/8"
                >
                  <div className="theme-heading text-base font-semibold">
                    {item.title}
                  </div>
                  <p className="theme-muted mt-2 text-sm leading-6">
                    {item.summary}
                  </p>
                </a>
              ))}
            </div>
          </nav>

          <div className="space-y-8">
            {LEGAL_DOCUMENTS.map((document) => (
              <article
                key={document.id}
                id={document.id}
                className="testimonial-card scroll-mt-32 rounded-[28px] p-6 md:p-8"
              >
                <h2 className="theme-heading font-nacelle text-2xl font-semibold md:text-3xl">
                  {document.title}
                </h2>
                <p className="theme-muted mt-3 text-sm leading-6 md:text-base">
                  {document.summary}
                </p>

                <div className="mt-8 space-y-8">
                  {document.sections.map((section) => (
                    <section key={`${document.id}-${section.title}`}>
                      <h3 className="theme-heading text-lg font-semibold md:text-xl">
                        {section.title}
                      </h3>
                      <div className="mt-4 space-y-4">
                        {section.paragraphs.map((paragraph, index) => (
                          <p
                            key={`${document.id}-${section.title}-${index}`}
                            className="theme-heading text-sm leading-7 md:text-base"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
