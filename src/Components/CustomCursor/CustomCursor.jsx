import { useEffect, useRef, useState } from "react";
import bgvid from "../../image/bg-circuit.mp4";
import "./CustomCursor.jsx";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const requestRef = useRef(0);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      if (target instanceof HTMLElement) {
        setIsPointer(window.getComputedStyle(target).cursor === "pointer");
      }

      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  useEffect(() => {
    const follow = () => {
      setRingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        const speed = 0.15;
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });
      requestRef.current = requestAnimationFrame(follow);
    };

    requestRef.current = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

  return (
    <>
      <div className="cursor-container">
        <div
          className={`ring-cursor ${isPointer ? "scale-up" : "scale-down"}`}
          style={{
            left: ringPosition.x,
            top: ringPosition.y,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className={`dot-cursor ${isPointer ? "scale-up" : "scale-down"}`}
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div className="circuit-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={bgvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
