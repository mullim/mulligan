`use client`;
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="mb-1 ml-1 w-6 h-6" onClick={handleThemeChange}>
      {isClient ? (
        theme === "light" ? (
          <SunIcon className="w-6 h-6 fill-dracula-orange" />
        ) : (
          <MoonIcon className="w-6 h-6 " />
        )
      ) : null}
    </button>
  );
}
