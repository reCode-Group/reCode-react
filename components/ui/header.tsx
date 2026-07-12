"use client";

import Link from "next/link";
import Logo from "./logo";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="header-shell relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link
                href="/signin"
                className="btn-sm btn-secondary py-[5px]"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm btn-primary py-[5px]"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
