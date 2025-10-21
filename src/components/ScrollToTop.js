import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Forceer direct naar boven zonder smooth scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Sommige browsers gebruiken 'auto' i.p.v. 'instant'
    });
  }, [pathname]);

  return null; // belangrijk: component moet iets returnen
};

export default ScrollToTop;
