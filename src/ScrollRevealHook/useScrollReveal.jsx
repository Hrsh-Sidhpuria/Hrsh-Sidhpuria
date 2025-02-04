import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = (selector, options) => {
  useEffect(() => {
    ScrollReveal().reveal(selector, {
      delay: 200,
      duration: 1500,
      distance: "60px",
      easing: "ease-in-out",
      origin: "top",
      // reset: true,
      ...options,
    });
  }, [selector, options]);
};

export default useScrollReveal;
