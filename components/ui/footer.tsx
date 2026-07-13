import BottomFond from "@/public/images/bottom-fond.png";
import BottomFond2 from "@/public/images/bottom-fond2.png";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import Image from "next/image";
import Link from "next/link";

import Logo from "./logo";

const platformLinks = [
  { href: "#hero", label: "О проекте" },
  { href: "#features", label: "Преимущества" },
  { href: "#pricing", label: "Тарифы и цены" },
  { href: "#faq", label: "Часто задаваемые вопросы" },
  { href: "/legal#agreement", label: "Пользовательское соглашение" },
  { href: "/legal/oferta", label: "Публичная оферта" },
];

const navigationLinks = [
  { href: "/", label: "Главная" },
  { href: "https://app.recode-group.ru", label: "Личный кабинет" },
  { href: "/contacts#support", label: "Техподдержка" },
  { href: "/blog", label: "Блог" },
  { href: "/contacts", label: "Контакты" },
];

const resourceLinks = [
  { href: "https://app.recode-group.ru/documentation", label: "Документация" },
  {
    href: "https://app.recode-group.ru/constructor",
    label: "Конструктор макросов",
  },
  { href: "/legal", label: "Юридические документы" },
];

export default function Footer() {
  return (
    <footer className="section-shell relative isolate">
      <div className="relative mx-auto max-w-6xl px-4 pt-4 pb-6 sm:px-6 sm:pt-6 sm:pb-10">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="footer-top-bar testimonial-card mt-6 rounded-2xl px-4 py-4 md:mt-10 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex shrink-0">
              <div className="flex items-center gap-4 rounded-xl bg-white px-4 py-3">
                <Image src={BottomFond} alt="Фонд" className="h-[34px] w-auto md:h-[40px]" />
                <Image
                  src={BottomFond2}
                  alt="Студенческий стартап"
                  className="h-[40px] w-auto md:h-[50px]"
                />
              </div>
            </div>
            <p className="theme-muted text-sm leading-5 md:text-base">
              Проект реализован при поддержке Фонда содействия инновациям в рамках
              программы «Студенческий стартап» мероприятия «Платформа
              университетского технологического предпринимательства» федерального
              проекта «Технологии».
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(3,minmax(0,220px))_1fr] lg:grid-rows-1 xl:gap-20">
          <div className="space-y-2">
            <h3 className="theme-heading text-sm font-medium">Платформа</h3>
            <ul className="space-y-2 text-sm">
              {platformLinks.map((item) => (
                <li key={item.label}>
                  <Link className="theme-link accent-hover transition" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="theme-heading text-sm font-medium">Навигация</h3>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link className="theme-link accent-hover transition" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="theme-heading text-sm font-medium">Ресурсы</h3>
            <ul className="space-y-2 text-sm">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link className="theme-link accent-hover transition" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="theme-link mb-3">
                © ООО «Рекод»
                <span className="theme-separator"> · </span>
                <a className="theme-link accent-hover transition" href="/contacts">
                  О компании
                </a>
              </p>

              <ul className="inline-flex items-center gap-3">
                <li>
                  <a
                    className="accent-icon flex items-center justify-center transition hover:opacity-70"
                    href="https://vk.com/recode_official"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="VK"
                  >
                    <svg
                      width="18"
                      height="11"
                      viewBox="0 0 18 11"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.27426 10.6429C3.45683 10.6429 0.1383586 6.64758 0 0H2.91404C3.00982 4.87979 5.15864 6.94665 6.86044 7.37237V0H9.60419V4.20822C11.2858 4.02729 13.0504 2.10943 13.6464 0H16.3901C15.9325 2.59901 14.0189 4.51687 12.6577 5.30551C14.0189 5.94408 16.1996 7.61716 17.0287 10.6429H14.0082C13.359 8.61866 11.7424 7.05308 9.60419 6.83916V10.6429H9.27426Z"
                        fill="#005de0"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="accent-icon flex items-center justify-center transition hover:opacity-70"
                    href="https://max.ru/+79871470944"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="MAX"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M6.08711 0.00886734C2.33028 0.205173 -0.149665 3.15157 0.00701947 6.86698C0.0754565 8.49326 0.72921 9.89261 0.884094 11.436C0.923715 11.8359 0.808453 12.3293 1.2695 12.504C1.83681 12.7183 2.70668 12.3581 3.18214 12.0286C3.34422 11.9187 3.49911 11.7908 3.61797 11.6324C4.10964 11.9583 4.57609 12.2735 5.16141 12.414C7.7386 13.0317 10.5625 11.6179 11.8178 9.34692C14.1771 5.08041 10.9876 -0.246871 6.08711 0.00886734ZM4.62832 8.91288C4.42481 9.07137 4.2285 9.28748 4.00338 9.41175C3.6774 9.58645 3.57655 9.40455 3.45408 9.11639C3.06867 8.1997 3.02185 6.63825 3.24697 5.67833C3.54953 4.37263 4.55988 3.22361 5.94843 3.10114C7.35319 2.97687 8.6571 3.69006 9.24601 4.97775C10.5499 7.8431 7.21272 10.6724 4.62832 8.91468V8.91288Z"
                        fill="#005de0"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="accent-icon flex items-center justify-center transition hover:opacity-70"
                    href="https://habr.com/ru/users/recode-team/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Habr"
                  >
                    <svg
                      width="40"
                      height="14"
                      viewBox="0 0 40 14"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 6.67597V13.3517L1.4356 13.3452L2.86795 13.3355L2.88416 10.5161L2.90036 7.69676L3.00406 7.48288C3.14017 7.21067 3.4221 6.93522 3.71052 6.80235C3.96652 6.68245 4.3554 6.64356 4.63733 6.70837C5.15907 6.83152 5.57712 7.20743 5.77479 7.73241L5.84933 7.92361L5.85905 10.5971C5.86553 12.4443 5.87849 13.2804 5.90442 13.3095C5.93034 13.3419 6.222 13.3517 7.29465 13.3517C8.49692 13.3517 8.65247 13.3452 8.70108 13.2998C8.74645 13.2512 8.75293 12.9498 8.73997 9.93604C8.73024 6.90929 8.72376 6.60791 8.67191 6.38431C8.38998 5.19176 7.4664 4.27791 6.28681 4.02838C5.90442 3.9506 4.83825 3.94736 4.55308 4.02514C3.76561 4.24226 3.13044 4.74456 2.92952 5.30842C2.89388 5.40888 2.8874 4.9876 2.88416 2.71268V0.00028038H1.44208H0V6.67597Z"
                        fill="#005de0"
                      />
                      <path
                        d="M22.0753 6.66597L22.0851 13.3352L23.5206 13.3449L24.953 13.3514V12.8815C24.953 12.6222 24.9595 12.4116 24.966 12.4116C24.9724 12.4116 25.0761 12.5121 25.1961 12.6384C25.8053 13.2671 26.5733 13.5782 27.5099 13.5782C28.6959 13.5782 29.7783 13.131 30.6111 12.3014C31.2366 11.6727 31.619 10.9566 31.8134 10.0459C31.9009 9.64086 31.8977 7.92981 31.8134 7.50205C31.4634 5.76507 30.1477 4.42021 28.4529 4.06698C27.4256 3.8531 26.5377 4.00217 25.734 4.53039C25.6335 4.59521 25.4164 4.78316 25.2544 4.94843L24.953 5.24981V2.62491V0H23.5109H22.0688L22.0753 6.66597ZM27.4775 6.82152C27.9311 6.92846 28.4529 7.31085 28.6959 7.71593C29.545 9.1094 28.4756 10.8885 26.8553 10.7783C25.802 10.707 24.9854 9.85474 24.9757 8.8145C24.9724 8.43859 25.0178 8.23119 25.1863 7.87796C25.4261 7.37566 25.922 6.97058 26.4761 6.82476C26.7127 6.76318 27.2182 6.76318 27.4775 6.82152Z"
                        fill="#005de0"
                      />
                      <path
                        d="M14.2912 3.98619C12.8135 4.11906 11.4881 5.02968 10.8108 6.37129C10.6358 6.71804 10.4835 7.17173 10.4154 7.54764C10.3571 7.88143 10.3312 9.0837 10.3701 9.60544C10.4543 10.623 10.8918 11.5757 11.6177 12.2984C12.2367 12.9141 13.0079 13.3322 13.8375 13.4974C14.2426 13.5784 14.9685 13.5979 15.3379 13.5331C15.9958 13.4197 16.5499 13.1312 17.0231 12.6549L17.2078 12.4669V12.9076V13.3516H18.6498H20.0919V8.81473V4.27785H18.6498H17.2078V4.72182V5.16578L16.942 4.90329C16.3814 4.35887 15.7657 4.06721 14.9879 3.98619C14.6704 3.95055 14.6866 3.95055 14.2912 3.98619ZM15.743 6.82174C16.0898 6.90276 16.3847 7.07451 16.6763 7.36941C17.0133 7.70643 17.1592 7.99161 17.2337 8.45826C17.2791 8.74667 17.2791 8.80176 17.2337 9.09342C16.968 10.704 15.0074 11.3521 13.8472 10.2082C13.3968 9.76423 13.1764 9.14851 13.2542 8.54575C13.3158 8.05966 13.4875 7.70643 13.8375 7.3532C14.1 7.09071 14.4014 6.91572 14.7449 6.82498C14.9782 6.76341 15.487 6.76017 15.743 6.82174Z"
                        fill="#005de0"
                      />
                      <path
                        d="M38.3204 4.00893C37.8699 4.06402 37.4324 4.21957 37.0695 4.45614C36.8394 4.60521 36.4667 4.94872 36.3339 5.13667L36.2658 5.23389L36.2626 4.75428V4.27791H34.8205H33.3784V8.81478V13.3517L34.814 13.3452L36.2464 13.3355L36.2626 10.7105L36.2788 8.08564L36.3533 7.90092C36.5834 7.33382 37.0144 6.95142 37.5815 6.81856C38.0158 6.71486 38.7352 6.76671 39.2958 6.93846C39.4125 6.97411 39.5162 6.99679 39.5226 6.99031C39.5324 6.98059 39.5972 6.35191 39.6685 5.58712C39.7689 4.49179 39.7884 4.19689 39.756 4.17421C39.6944 4.13856 39.3023 4.0543 39.0365 4.01866C38.8097 3.98949 38.5083 3.98301 38.3204 4.00893Z"
                        fill="#005de0"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
