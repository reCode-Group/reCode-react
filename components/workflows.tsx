import Spotlight from "@/components/spotlight";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Image from "next/image";

export default function Workflows() {
  return (
    <section>
      <div className="section-shell mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="theme-eyebrow-lines inline-flex items-center gap-3 pb-3 before:h-px before:w-8 after:h-px after:w-8">
              <span className="theme-eyebrow inline-flex">
                Рабочие процессы
              </span>
            </div>
            <h2 className="theme-display-title animate-[gradient_6s_linear_infinite] pb-4 font-nacelle text-3xl font-semibold md:text-4xl">
              Как всё устроено?
            </h2>
            <p className="theme-muted text-lg">
              Три ключевых этапа работы с переводом макросов: от управления доступом и тарифом до
  перевода, редактирования и контроля ресурсов.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="workflow-card group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="https://app.recode-group.ru"
            >
              <div className="workflow-card-inner relative z-20 h-full overflow-hidden rounded-[inherit]">
                {/* Arrow */}
                <div
                  className="workflow-arrow absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="workflow-pill btn-sm relative rounded-full px-4 py-1.5 text-base font-medium">
                      <span className="workflow-pill-label">
                        Личный кабинет
                      </span>
                    </span>
                  </div>
                  <p className="theme-muted">
                    В личном кабинете вы управляете аккаунтом, приобретаете тариф и контролируете доступный
     функционал.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 2 */}
            <a
              className="workflow-card group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="https://app.recode-group.ru"
            >
              <div className="workflow-card-inner relative z-20 h-full overflow-hidden rounded-[inherit]">
                {/* Arrow */}
                <div
                  className="workflow-arrow absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Workflow 02"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="workflow-pill btn-sm relative rounded-full px-4 py-1.5 text-base font-medium">
                      <span className="workflow-pill-label">
                        Переводчик макросов
                      </span>
                    </span>
                  </div>
                  <p className="theme-muted">
                    Вставляйте исходный код, переводите макросы в нужный формат и дорабатывайте их в
     конструкторе.
                  </p>
                </div>
              </div>
            </a>
            {/* Card 3 */}
            <a
              className="workflow-card group/card relative h-full overflow-hidden rounded-2xl p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="https://app.recode-group.ru"
            >
              <div className="workflow-card-inner relative z-20 h-full overflow-hidden rounded-[inherit]">
                {/* Arrow */}
                <div
                  className="workflow-arrow absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-opacity group-hover/card:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={8}
                    fill="none"
                  >
                    <path
                      d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                    />
                  </svg>
                </div>
                {/* Image */}
                <Image
                  className="inline-flex"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Workflow 03"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="workflow-pill btn-sm relative rounded-full px-4 py-1.5 text-base font-medium">
                      <span className="workflow-pill-label">
                        Тарифы и токены 
                      </span>
                    </span>
                  </div>
                  <p className="theme-muted">
                    Выбирайте подходящий тариф под необходимый функционал, задачи команды и объем перевода.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
