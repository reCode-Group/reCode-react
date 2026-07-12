"use client";

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "@/components/theme-provider";
import LogoColored from "@/public/images/recode-logo-colored.svg";
import LogoWhite from "@/public/images/recode-logo-white.svg";

type LogoProps = {
  priority?: boolean;
};

export default function Logo({ priority = false }: LogoProps) {
  const { theme } = useTheme();
  const logo = theme === "light" ? LogoColored : LogoWhite;

  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="reCode">
      <Image
        src={logo}
        alt="reCode"
        width={125}
        height={34}
        priority={priority}
        className="header-logo h-auto w-[108px] sm:w-[118px] md:w-[125px]"
      />
    </Link>
  );
}
