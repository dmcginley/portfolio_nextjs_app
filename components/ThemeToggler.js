import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="w-8 h-8 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:bg-gray-300 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <HiOutlineMoon className="text-darkBlue w-6 h-6" />
      ) : (
        <HiOutlineSun className="text-blue-10 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggler;
