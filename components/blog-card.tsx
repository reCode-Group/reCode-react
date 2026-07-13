import Image from "next/image";
import Link from "next/link";

import type { BlogArticle } from "@/lib/blog-data";

type BlogCardProps = {
  article: BlogArticle;
};

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="testimonial-card flex h-full flex-col overflow-hidden rounded-[24px]">
      <div className="relative aspect-[21/9]">
        <Image
          src={article.previewImage}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="theme-heading line-clamp-2 text-lg font-semibold leading-7">
          {article.title}
        </h2>
        <p className="theme-muted mt-3 line-clamp-2 text-sm leading-6">
          {article.description}
        </p>
        <Link
          href={`/blog/${article.slug}`}
          className="btn btn-secondary mt-5 inline-flex w-full justify-center sm:w-auto"
        >
          Читать
        </Link>
      </div>
    </article>
  );
}
