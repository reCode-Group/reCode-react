"use client";

import { useTheme } from "@/components/theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
        className={`relative inline-flex h-9 w-[4.5rem] items-center rounded-full border px-1 transition-colors ${
        isLight
          ? "border-sky-200 bg-white/90 text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
          : "border-gray-700/80 bg-gray-900/90 text-gray-200"
      }`}
      aria-label={
        isLight ? "Switch to dark theme" : "Switch to light theme"
      }
      aria-pressed={isLight}
    >
      <span
        className={`absolute h-7 w-7 rounded-full transition-transform ${
          isLight
            ? "translate-x-8 bg-[var(--site-accent)]"
            : "translate-x-0 bg-gray-700"
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em]">
        <span className={isLight ? "text-slate-400" : "text-amber-300"}>
          D
        </span>
        <span className={isLight ? "text-white" : "text-slate-500"}>L</span>
      </span>
    </button>
  );
}
