const STORAGE_KEY = "rp-theme";

export function getEffectiveTheme() {
  const stored = document.documentElement.dataset.theme;
  if (stored === "main" || stored === "dawn") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "dawn" : "main";
}

export function applyTheme(theme) {
  if (theme === "main" || theme === "dawn") {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
    return;
  }

  delete document.documentElement.dataset.theme;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function initTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "main" || stored === "dawn") {
      document.documentElement.dataset.theme = stored;
    }
  } catch {
    /* ignore */
  }
}

export function toggleTheme() {
  applyTheme(getEffectiveTheme() === "main" ? "dawn" : "main");
}
