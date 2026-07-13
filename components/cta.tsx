import BlurredShape from "@/public/images/blurred-shape.svg";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="cta-shell max-w6xl mx-auto px-4 sm:px-6">
        <div className="cta-panel py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="theme-display-title animate-[gradient_6s_linear_infinite] pb-8 font-nacelle text-3xl font-semibold md:text-4xl"
              data-aos="fade-up"
            >
              Переводите макросы для работы в российских офисных пакетах
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn btn-primary group mb-4 w-full sm:mb-0 sm:w-auto"
                  href="https://app.recode-group.ru"
                >
                  <span className="relative inline-flex items-center">
                    НАЧАТЬ РАБОТУ
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="cta-secondary btn theme-muted hover:bg-[length:100%_150%] w-full sm:ml-4 sm:w-auto"
                  href="#features"
                >
                  СМОТРЕТЬ ВОЗМОЖНОСТИ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
