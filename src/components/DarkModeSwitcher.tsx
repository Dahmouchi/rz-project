"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <label className="ui-switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <div className="slider">
        <div className="circle" />
      </div>
    </label>
  );
};

export default DarkModeSwitcher;
