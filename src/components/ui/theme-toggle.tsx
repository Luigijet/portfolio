import { useEffect, useState } from "react";

import { FiSun, FiMoon } from "react-icons/fi";

import { useTheme } from "@/context/theme-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2 text-sm rounded-md bg-background box border border-border">
        <div className="w-4 h-4" /> {/* Matches icon size */}
      </div>
    );
  }

  return (
    <button
      className="p-2 text-sm rounded-md bg-background box border border-border"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
}
