"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = "chakra-ui-color-mode";
const COOKIE_KEY = "recode-color-mode";
const DEFAULT_THEME: Theme = "light";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function parseTheme(value: string | null | undefined): Theme | null {
  return value === "dark" || value === "light" ? value : null;
}

function readThemeCookie(): Theme | null {
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_KEY}=`));

  return parseTheme(cookie?.slice(COOKIE_KEY.length + 1));
}

function readLocalTheme(): Theme | null {
  try {
    return parseTheme(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function writeLocalTheme(theme: Theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // The shared cookie remains the source of truth when localStorage is unavailable.
  }
}

function writeThemeCookie(theme: Theme) {
  const hostname = window.location.hostname;
  const isSharedDomain =
    hostname === "recode-group.ru" || hostname.endsWith(".recode-group.ru");
  const attributes = [
    `${COOKIE_KEY}=${theme}`,
    "Path=/",
    "Max-Age=31536000",
    "SameSite=Lax",
  ];

  if (isSharedDomain) {
    attributes.push("Domain=recode-group.ru");
  }

  if (window.location.protocol === "https:") {
    attributes.push("Secure");
  }

  document.cookie = attributes.join("; ");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const cookieTheme = readThemeCookie();
    const localTheme = readLocalTheme();
    const nextTheme = cookieTheme ?? localTheme ?? DEFAULT_THEME;

    if (cookieTheme) {
      writeLocalTheme(cookieTheme);
    }

    setThemeState(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    applyTheme(nextTheme);
    writeThemeCookie(nextTheme);
    writeLocalTheme(nextTheme);
  };

  const value = {
    theme,
    setTheme,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}

export { COOKIE_KEY, DEFAULT_THEME, STORAGE_KEY, type Theme };
