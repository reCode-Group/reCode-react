import BottomFond from "@/public/images/bottom-fond.png";
import BottomFond2 from "@/public/images/bottom-fond2.png";
import Image from "next/image";

export default function SupportBanner() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex shrink-0">
          <div className="flex items-center gap-4 rounded-xl bg-white px-4 py-3">
            <Image
              src={BottomFond}
              alt="Фонд"
              className="h-[34px] w-auto md:h-[40px]"
            />
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
  );
}
