import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".animate-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% of section is visible
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);
}
