import ModalVideo from "@/components/modal-video";
import SupportBanner from "@/components/ui/support-banner";
import VideoThumb from "@/public/images/hero-image-02.png";
import HeroMyOffice from "@/public/images/hero-myoffice.png";
import HeroOffice2010 from "@/public/images/hero-office2010.png";
import HeroOffice2016 from "@/public/images/hero-office2016.png";
import HeroR7 from "@/public/images/hero-r7.png";
import HeroYandex from "@/public/images/hero-yandex.png";

const supportedPackages = [
  { title: "МойОфис", image: HeroMyOffice },
  { title: "Яндекс Документы", image: HeroYandex },
  { title: "Р7-Офис", image: HeroR7 },
  { title: "Microsoft Office 2016+", image: HeroOffice2016 },
  { title: "Microsoft Office 2010", image: HeroOffice2010 },
];

export default function HeroHome() {
  return (
    <section id="hero">
      <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          <div className="pb-10 md:pb-14">
            <SupportBanner />
          </div>

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
                className="theme-muted mb-8 text-base"
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
                  <a className="btn btn-secondary w-full sm:ml-4 sm:w-auto" href="#features">
                    СМОТРЕТЬ ВОЗМОЖНОСТИ
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-12 md:pb-16">
            <h2
              className="theme-display-title text-center font-nacelle text-3xl font-semibold md:text-4xl"
              data-aos="fade-up"
            >
              Поддерживается
            </h2>
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 justify-items-center gap-x-4 gap-y-6 md:grid-cols-5 md:gap-x-8">
              {supportedPackages.map((item, index) => (
                <div
                  key={item.title}
                  className="w-[132px] text-center md:w-[148px]"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mx-auto flex h-[96px] w-[96px] items-center justify-center rounded-[24px] border-2 border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900/70 md:h-[112px] md:w-[112px]">
                    <img
                      src={item.image.src}
                      alt={item.title}
                      className="max-h-12 w-auto object-contain md:max-h-14"
                    />
                  </div>
                  <p className="mt-6 text-[14px] font-medium leading-[1.25] theme-muted md:text-[15px]">
                    {item.title}
                  </p>
                </div>
              ))}
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
