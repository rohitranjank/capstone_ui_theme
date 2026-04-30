import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import THEMES from "../data/themes";

const ThemeContext = createContext(null);

// Cache for loaded fonts
const loadedFonts = new Set();

// Load Google Fonts safely
function loadGoogleFonts(googleQuery) {
  if (!googleQuery || loadedFonts.has(googleQuery)) return;

  loadedFonts.add(googleQuery);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?${googleQuery}&display=swap`;

  document.head.appendChild(link);
}

export function ThemeProvider({ children }) {
  const [activeThemeId, setActiveThemeId] = useState(
    () => localStorage.getItem("tm_activeTheme") || THEMES[0]?.id
  );

  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tm_favorites") || "[]");
    } catch {
      return [];
    }
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get active theme safely
  const activeTheme =
    THEMES.find((t) => t.id === activeThemeId) || THEMES[0];

  // Apply CSS variables
  const applyCSSVariables = useCallback((theme) => {
    if (!theme) return;

    const root = document.documentElement;

    // Colors
    Object.entries(theme.colors || {}).forEach(([key, value]) => {
      root.style.setProperty(`--tm-${key}`, value);
    });

    // Fonts (SAFE fallback)
    const headingFont =
      theme.fonts?.heading || theme.font || "sans-serif";
    const bodyFont =
      theme.fonts?.body || theme.font || "sans-serif";

    root.style.setProperty("--tm-font-heading", headingFont);
    root.style.setProperty("--tm-font-body", bodyFont);

    // Optional: apply globally
    document.body.style.fontFamily = bodyFont;
  }, []);

  // Apply fonts
  const applyFonts = useCallback((theme) => {
    if (theme?.fonts?.google) {
      loadGoogleFonts(theme.fonts.google);
    }
  }, []);

  // Apply theme with animation
  const applyTheme = useCallback(
    (themeId) => {
      if (!themeId || themeId === activeThemeId) return;

      setIsTransitioning(true);

      setTimeout(() => {
        setActiveThemeId(themeId);
        localStorage.setItem("tm_activeTheme", themeId);
        setIsTransitioning(false);
      }, 220);
    },
    [activeThemeId]
  );

  // Favorites toggle
  const toggleFavorite = useCallback((themeId) => {
    setFavorites((prev) => {
      const next = prev.includes(themeId)
        ? prev.filter((id) => id !== themeId)
        : [...prev, themeId];

      localStorage.setItem("tm_favorites", JSON.stringify(next));
      return next;
    });
  }, []);

  // Apply theme on change
  useEffect(() => {
    if (!activeTheme) return;

    applyCSSVariables(activeTheme);
    applyFonts(activeTheme);
  }, [activeTheme, applyCSSVariables, applyFonts]);

  // Preload fonts (non-blocking)
  useEffect(() => {
    const preload = () => {
      THEMES.forEach((t) => {
        if (t?.fonts?.google) {
          loadGoogleFonts(t.fonts.google);
        }
      });
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preload, { timeout: 3000 });
    } else {
      setTimeout(preload, 1000);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        activeThemeId,
        themes: THEMES,
        favorites,
        isTransitioning,
        applyTheme,
        toggleFavorite,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Hook
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}