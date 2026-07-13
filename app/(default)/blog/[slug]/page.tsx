import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlogCard from "@/components/blog-card";
import {
	BLOG_ARTICLES,
	getBlogArticleBySlug,
	getRelatedBlogArticles,
} from "@/lib/blog-data";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: "Статья не найдена - Рекод",
    };
  }

  return {
    title: `${article.title} - Рекод`,
    description: article.description,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedBlogArticles(article.slug, 4);

  return (
    <section className="relative isolate">
      <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <Link
            href="/blog"
            className="accent-link mb-6 inline-flex text-sm font-medium transition hover:opacity-80"
          >
            ← Назад к блогу
          </Link>

          <div className="max-w-4xl">
            <h1 className="theme-display-title font-nacelle text-4xl font-semibold md:text-5xl">
              {article.title}
            </h1>
            <p className="theme-muted mt-5 text-base leading-7 md:text-lg">
              {article.subtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,2.15fr)_320px] lg:items-start">
            <article className="min-w-0">
              <div className="relative mb-8 aspect-[16/8.5] overflow-hidden rounded-[28px]">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>

              <div className="space-y-6">
                {article.content.map((paragraph, index) => (
                  <p
                    key={`${article.slug}-${index}`}
                    className="theme-heading text-base leading-8 md:text-lg md:leading-9"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <aside className="testimonial-card h-fit rounded-[28px] p-6 lg:sticky lg:top-32">
              <p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.28em]">
                Сервис
              </p>
              <h2 className="theme-heading mt-4 font-nacelle text-2xl font-semibold leading-8">
                Переводите VBA-макросы в современные языки
              </h2>
              <p className="theme-muted mt-4 text-sm leading-6">
                Платформа reCode ускоряет миграцию кода и снижает риски ручного
                переписывания.
              </p>
              <a
                href="https://app.recode-group.ru/translator"
                className="btn btn-primary mt-6 inline-flex w-full justify-center"
              >
                Начать работу
              </a>
            </aside>
          </div>

          <div className="mt-16 md:mt-20">
            <h2 className="theme-heading font-nacelle text-2xl font-semibold md:text-3xl">
              Читайте также
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {relatedArticles.map((relatedArticle) => (
                <BlogCard key={relatedArticle.slug} article={relatedArticle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
