import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImageLight from "@/public/images/features-light.svg";
import FeaturesImage from "@/public/images/features.png";
import Image from "next/image";

const features = [
  {
    title: "Единая платформа для макросов",
    description:
      "Всё необходимое для работы с макросами: переводчик, конструктор и редактор кода — в одном месте",
    icon: (
      <svg
        className="accent-fill mb-3"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
      >
        <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
        <path
          fillOpacity=".48"
          d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
        />
      </svg>
    ),
  },
  {
    title: "Без знаний кода",
    description:
      "Создавайте и редактируйте макросы через удобный интерфейс без глубоких знаний программирования",
    icon: (
      <svg
        className="accent-fill mb-3"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
      >
        <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
        <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
      </svg>
    ),
  },
  {
    title: "Поддержка VBA, JavaScript и Lua макросов",
    description:
      "Настраивайте целевой язык перед обработкой и получайте нужный формат кода",
    icon: (
      <svg
        className="accent-fill mb-3"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
      >
        <path
          fillOpacity=".48"
          d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
        />
        <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative isolate">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="theme-gray-blur max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
      <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
        <div className="section-divider py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="theme-eyebrow-lines inline-flex items-center gap-3 pb-3 before:h-px before:w-8 after:h-px after:w-8">
              <span className="theme-eyebrow inline-flex">
                Ключевые преимущества
              </span>
            </div>
            <h2 className="theme-display-title animate-[gradient_6s_linear_infinite] pb-4 font-nacelle text-3xl font-semibold md:text-4xl">
              Возможности платформы Рекод
            </h2>
            <p className="theme-muted text-lg">
              Технические и функциональные преимущества, доступные уже сейчас
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="theme-dark-only max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
            <Image
              className="theme-light-only max-w-none"
              src={FeaturesImageLight}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title}>
                {feature.icon}
                <h3 className="theme-heading mb-1 font-nacelle text-[1rem] font-semibold">
                  {feature.title}
                </h3>
                <p className="theme-muted">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
