"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage; default to dark mode if no preference is saved
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") !== "light";
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 p-3 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg transition transform hover:scale-105 focus:outline-none z-50"
    >
      <i
        className={`fa-solid ${
          darkMode ? "fa-moon" : "fa-sun"
        } text-xl`}
      ></i>
    </button>
  );
}
