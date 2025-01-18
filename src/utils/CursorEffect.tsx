import React, { useEffect, useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

const CursorEffect: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const isMobile = useBreakpoint(1024);

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
    <>
      {!isMobile && (
        <div
          className="fixed pointer-events-none z-[100] w-[300px] h-[300px] rounded-full bg-blue_light opacity-30 mix-blend-lighten blur-[150px]"
          style={{
            transform: `translate(${cursorPosition.x - 75}px, ${
              cursorPosition.y - 75
            }px)`,
            transition: "transform 1s ease-out",
          }}
        ></div>
      )}
    </>
  );
};

export default CursorEffect;
