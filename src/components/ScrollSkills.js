import { useEffect, useRef, useState } from "react";
import "../css/ScrollSkills.css";

const items = [
  "UI/UX Design",
  "Front-End",
  "Design",
  "Development",
  "Creative",
];

export default function Marquee() {
  const containerRef = useRef(null);
  const [repeat, setRepeat] = useState(2); // start veilig hoog genoeg

  useEffect(() => {
    const measure = () => {
      const containerWidth = containerRef.current?.offsetWidth ?? 0;

      // maak een tijdelijke, onzichtbare meting van 1x de items
      const temp = document.createElement("div");
      temp.style.position = "absolute";
      temp.style.visibility = "hidden";
      temp.style.display = "flex";
      temp.className = "marquee__group";
      temp.innerHTML = items
        .map(
          (item) =>
            `<div class="marquee__item"><span>${item}</span><span class="marquee__separator">•</span></div>`
        )
        .join("");
      document.body.appendChild(temp);
      const oneSetWidth = temp.offsetWidth;
      document.body.removeChild(temp);

      const needed = Math.ceil(containerWidth / oneSetWidth) + 1;
      setRepeat(Math.max(2, needed));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const repeatedItems = Array.from({ length: repeat }, () => items).flat();

  return (
    <div className="marquee bgSlider" ref={containerRef}>
      <div className="marquee__track">
        <div className="marquee__group">
          {repeatedItems.map((item, index) => (
            <div className="marquee__item" key={`a-${index}`}>
              <span>{item}</span>
              <span className="marquee__separator">•</span>
            </div>
          ))}
        </div>

        <div className="marquee__group" aria-hidden="true">
          {repeatedItems.map((item, index) => (
            <div className="marquee__item" key={`b-${index}`}>
              <span>{item}</span>
              <span className="marquee__separator">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}