export const metadata = {
  title: "Рекод - Автоматический перевод VBA макросов на JS для отечественных офисных пакетов",
  description: "Автоматический перевод VBA макросов на JS для отечественных офисных пакетов",
};

import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero-home";
import PageIllustration from "@/components/page-illustration";
import Testimonials from "@/components/testimonials";
import Workflows from "@/components/workflows";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
