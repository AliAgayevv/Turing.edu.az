import React, { useEffect, useState } from "react";

const CursorEffect: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[100] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-white/25 to-transparent mix-blend-lighten blur-2xl"
      style={{
        transform: `translate(${cursorPosition.x - 75}px, ${
          cursorPosition.y - 75
        }px)`,
        transition: "transform 0.1s ease-out",
      }}
    ></div>
  );
};

export default CursorEffect;
