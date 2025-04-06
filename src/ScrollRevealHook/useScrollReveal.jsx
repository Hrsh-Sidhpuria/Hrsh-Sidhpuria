// ../../ScrollRevealHook/useScrollReveal.js
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = (selector, config = {}) => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(selector, {
      origin: "right",
      delay: 100,
      distance: "50px",
      duration: 800,
      reset: true,
      interval: 100,
      cleanup: true,
      ...config,
    });

    return () => {
      sr.clean(selector);
    };
  }, [selector]);
};

export default useScrollReveal;
