"use client";

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverPanel,
} from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

import ThemeToggle from "@/components/theme-toggle";
import Logo from "./logo";

type NavItem = {
  href: string;
  label: string;
  beta?: boolean;
};

const primaryItemsBeforeResources: NavItem[] = [
  { href: "/", label: "О ПРОЕКТЕ" },
  { href: "#", label: "ПЕРЕВОДЧИК", beta: true },
];

const resourceItems: NavItem[] = [
  { href: "#", label: "Документация" },
  { href: "#", label: "Конструктор макросов" },
  { href: "#", label: "Юридические документы" },
];

const primaryItemsAfterResources: NavItem[] = [
  { href: "#", label: "БЛОГ" },
  { href: "#", label: "ТЕХПОДДЕРЖКА" },
];

function NavItemLabel({ beta, label }: Pick<NavItem, "beta" | "label">) {
  return (
    <span className="flex items-start gap-1.5">
      <span>{label}</span>
      {beta ? (
        <span className="header-beta text-[8px] font-bold uppercase leading-none">
          Beta
        </span>
      ) : null}
    </span>
  );
}

function HeaderLink({
  href,
  label,
  beta,
  onClick,
}: NavItem & { onClick?: () => void }) {
  return (
    <Link href={href} className="header-nav-link" onClick={onClick}>
      <NavItemLabel beta={beta} label={label} />
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header-wrap fixed left-0 top-2 z-40 w-full md:top-5 xl:top-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="header-shell relative flex min-h-14 items-center gap-3 rounded-2xl px-3 py-2.5 md:px-5 md:py-4 xl:px-6 xl:py-[1.35rem] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-lg">
          <div className="flex flex-1 items-center">
            <Logo priority />
          </div>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {primaryItemsBeforeResources.map((item) => (
              <HeaderLink key={item.label} {...item} />
            ))}

            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className="header-nav-link accent-focus flex items-center gap-2 focus-visible:outline-hidden">
                    <span>РЕСУРСЫ</span>
                    <svg
                      className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.25 4.5 6 8.25 9.75 4.5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </PopoverButton>
                  <PopoverPanel
                    anchor="bottom"
                    className="header-popover mt-3 w-64 rounded-2xl p-2 shadow-[0_20px_60px_rgba(15,23,42,0.18)] [--anchor-gap:12px]"
                  >
                    <div className="grid gap-1">
                      {resourceItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="header-menu-link"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            {primaryItemsAfterResources.map((item) => (
              <HeaderLink key={item.label} {...item} />
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link href="/signin" className="header-cta btn-sm">
              Личный кабинет
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="header-burger accent-focus inline-flex h-10 w-10 items-center justify-center rounded-xl focus-visible:outline-hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Открыть меню"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Dialog
        open={mobileOpen}
        onClose={setMobileOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-slate-950/45 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 flex max-w-full">
          <DialogPanel className="header-drawer flex h-full w-[250px] max-w-[250px] flex-col rounded-l-3xl p-4 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <Logo />
              <button
                type="button"
                className="header-close accent-focus inline-flex h-10 w-10 items-center justify-center rounded-xl focus-visible:outline-hidden"
                onClick={() => setMobileOpen(false)}
                aria-label="Закрыть меню"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="m5 5 10 10M15 5 5 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-8 grid gap-1">
              {primaryItemsBeforeResources.map((item) => (
                <Link
                  key={`mobile-${item.label}`}
                  href={item.href}
                  className="header-mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <NavItemLabel beta={item.beta} label={item.label} />
                </Link>
              ))}

              <Disclosure as="div" className="grid gap-1">
                {({ open }) => (
                  <>
                    <DisclosureButton className="header-mobile-link accent-focus flex w-full items-center justify-between text-left focus-visible:outline-hidden">
                      <span>РЕСУРСЫ</span>
                      <svg
                        className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
                        viewBox="0 0 12 12"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.25 4.5 6 8.25 9.75 4.5"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </DisclosureButton>
                    <DisclosurePanel className="grid gap-1 pl-3">
                      {resourceItems.map((item) => (
                        <Link
                          key={`resource-${item.label}`}
                          href={item.href}
                          className="header-mobile-sub-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>

              {primaryItemsAfterResources.map((item) => (
                <Link
                  key={`mobile-${item.label}`}
                  href={item.href}
                  className="header-mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <NavItemLabel beta={item.beta} label={item.label} />
                </Link>
              ))}
            </div>

            <Link
              href="/signin"
              className="header-cta mt-6 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Личный кабинет
            </Link>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}
