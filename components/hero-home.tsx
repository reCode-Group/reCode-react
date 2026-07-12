import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image-01.jpg";

export default function HeroHome() {
  return (
    <section>
      <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="theme-display-title pb-5 animate-[gradient_6s_linear_infinite] font-nacelle text-4xl font-semibold md:text-5xl"
              data-aos="fade-up"
            >
              Автоматический перевод<br/>
							в один клик
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="theme-muted mb-8 text-md"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Сохраняйте ценные инструменты автоматизации при переходе на российские офисные пакеты.
Рекод - это онлайн-сервис для автоматизированного перевода макросов под российские офисные пакеты.
Всё работает в облаке - ничего не нужно устанавливать.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn btn-primary group mb-4 w-full sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Начать работу
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a className="btn btn-secondary w-full sm:ml-4 sm:w-auto" href="#0">
                    Смотреть возможности
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
