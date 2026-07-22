import { LEGAL_DOCUMENTS, type LegalBlock } from "@/lib/legal-documents";

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
              Здесь размещены реквизиты ООО «РЕКОД РЕШЕНИЯ», публичная оферта, пользовательское соглашение, документы об обработке персональных данных, правила работы с пользовательским кодом, оплаты и возвратов.
            </p>
          </div>

          <nav className="testimonial-card mb-10 rounded-[28px] p-6 md:p-8" aria-label="Оглавление юридических документов">
            <h2 className="theme-heading font-nacelle text-2xl font-semibold">Оглавление</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {documentLinks.map((item) => (
                <a key={item.href} href={item.href} className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-sky-400/40 hover:bg-white/8">
                  <div className="theme-heading text-base font-semibold">{item.title}</div>
                  <p className="theme-muted mt-2 text-sm leading-6">{item.summary}</p>
                </a>
              ))}
            </div>
          </nav>

          <div className="space-y-8">
            {LEGAL_DOCUMENTS.map((document) => (
              <article key={document.id} id={document.id} className="testimonial-card scroll-mt-32 rounded-[28px] p-6 md:p-8">
                <h2 className="theme-heading font-nacelle text-2xl font-semibold md:text-3xl">{document.title}</h2>
                <p className="theme-muted mt-3 text-sm leading-6 md:text-base">{document.summary}</p>
                <div className="mt-8 space-y-8">
                  {document.blocks.map((block, index) => <LegalBlockView key={`${document.id}-${index}`} block={block} />)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalBlockView({ block }: { block: LegalBlock }) {
  if (block.type === "table") {
    return (
      <section>
        {block.title ? <h3 className="theme-heading mb-4 text-lg font-semibold md:text-xl">{block.title}</h3> : null}
        <div className="overflow-x-auto rounded-2xl border border-slate-400/30">
          <table className="min-w-full border-collapse text-left text-sm md:text-base">
            {block.headers ? <thead className="bg-white/10"><tr>{block.headers.map((header) => <th key={header} className="theme-heading border-b border-slate-400/25 px-4 py-3 font-semibold">{header}</th>)}</tr></thead> : null}
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="align-top even:bg-white/[0.03]">
                  {row.map((cell, cellIndex) => <td key={cellIndex} className="theme-heading border-b border-slate-400/20 px-4 py-3 leading-6">{renderText(cell)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h3 className="theme-heading text-lg font-semibold md:text-xl">{block.title}</h3>
      {block.paragraphs?.length ? <div className="mt-4 space-y-4">{block.paragraphs.map((paragraph, index) => <p key={index} className="theme-heading text-sm leading-7 md:text-base">{renderText(paragraph)}</p>)}</div> : null}
      {block.items?.length ? <ul className="theme-heading mt-4 list-disc space-y-2 pl-5 text-sm leading-7 md:text-base">{block.items.map((item, index) => <li key={index}>{renderText(item)}</li>)}</ul> : null}
    </section>
  );
}

function renderText(text: string) {
  return text.split(/(admin@recode-group\.ru|help@recode-group\.ru|info@recode-group\.ru)/g).map((part, index) =>
    /^(admin|help|info)@recode-group\.ru$/.test(part) ? <a key={`${part}-${index}`} href={`mailto:${part}`} className="theme-link accent-hover underline underline-offset-2 transition">{part}</a> : part,
  );
}
