import BlogCard from "@/components/blog-card";
import { BLOG_ARTICLES } from "@/lib/blog-data";

export const metadata = {
  title: "Блог - Рекод",
  description:
    "Подборка материалов по VBA, автоматизации, поддержке и миграции макросов.",
};

export default function BlogPage() {
  return (
    <section className="relative isolate">
      <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="testimonial-card mb-8 rounded-[28px] px-5 py-8 sm:px-8 md:px-10 md:py-10">
            <h1 className="theme-display-title mt-5 max-w-3xl font-nacelle text-4xl font-semibold md:text-5xl">
              Статьи о VBA, автоматизации и миграции макросов
            </h1>
            <p className="theme-muted mt-5 max-w-3xl text-base leading-7 md:text-lg">
              Подборка материалов по разработке и сопровождению VBA-макросов:
              от первых автоматизаций до оптимизации, отладки и безопасной
              миграции.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_ARTICLES.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
