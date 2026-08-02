"use client";

import { useEffect, useState } from "react";

/** Полоса прогресса чтения поверх страницы — как в макете. */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-brand-700/15"
    >
      <div
        className="h-full bg-[linear-gradient(90deg,#006270_0%,#00E0C7_100%)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
