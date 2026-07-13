"use client";

import { useTheme } from "@/components/theme-provider";

function SunIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-3.5 w-3.5 transition-colors ${
        active ? "text-amber-400" : "text-slate-400"
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
    </svg>
  );
}

function MoonIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-3.5 w-3.5 transition-colors ${
        active ? "text-sky-200" : "text-slate-500"
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex h-11 w-7 items-center justify-center rounded-full border p-1 transition-colors ${
        isLight
          ? "border-sky-200 bg-white/95 text-slate-700"
          : "border-gray-700/80 bg-gray-900/90 text-gray-200"
      }`}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={isLight}
    >
      <span
        className={`absolute left-1 h-4 w-4 rounded-full transition-transform duration-200 ${
          isLight
            ? "translate-y-[8px] bg-transparent border border-gray-700/50"
            : "-translate-y-[8px] bg-gray-700"
        }`}
      />
      <span className="relative z-10 flex h-full flex-col items-center justify-between py-[2.1px]">
        <MoonIcon active={!isLight} />
        <SunIcon active={isLight} />
      </span>
    </button>
  );
}
