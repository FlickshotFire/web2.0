import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all elements with section-enter class
    const elements = document.querySelectorAll(".section-enter");
    elements.forEach((el) => observer.observe(el));

    // Parallax effect for parallax-layer elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      const parallaxElements = document.querySelectorAll(".parallax-layer");
      parallaxElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.transform = `translateY(${rate}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
