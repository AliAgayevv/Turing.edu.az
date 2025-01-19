"use client";
import resizeSVG from "../../assets/vectors/resize.svg";

import { motion } from "framer-motion";
import { useState } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";

export default function ResizableText() {
  const [dimensions, setDimensions] = useState({ width: 300, height: 120 });
  const [isResizing, setIsResizing] = useState(false);

  // Motion values for smooth transitions
  const width = useMotionValue(dimensions.width);
  const height = useMotionValue(dimensions.height);

  // Transform the corner opacity based on hover/resize state
  const cornerOpacity = useTransform(
    width,
    [dimensions.width - 5, dimensions.width + 5],
    [0.5, 1]
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);

    const startX = e.pageX;
    const startY = e.pageY;
    const startWidth = dimensions.width;
    const startHeight = dimensions.height;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + (e.pageX - startX);
      const newHeight = startHeight + (e.pageY - startY);

      // Animate to new dimensions smoothly
      animate(width, Math.max(200, newWidth), {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
      animate(height, Math.max(80, newHeight), {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });

      setDimensions({
        width: Math.max(200, newWidth),
        height: Math.max(80, newHeight),
      });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="w-full  flex ">
      <motion.div
        className="relative"
        style={{
          width,
          height,
        }}
      >
        {/* Text container with frame */}
        <motion.div
          className="w-full h-full border border-white flex items-center justify-center p-4"
          animate={{
            scale: isResizing ? 1.02 : 1,
          }}
          transition={{
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 30,
            },
          }}
        >
          <div className="text-white text-2xl font-medium whitespace-nowrap">
            Birlikdə inkişaf edək!
          </div>
        </motion.div>

        {/* Corner markers */}
        {["top-left", "top-right", "bottom-left", "bottom-right"].map(
          (position) => (
            <motion.div
              key={position}
              className={`absolute w-4 h-4 bg-white ${
                position === "top-left"
                  ? "-top-2 -left-2"
                  : position === "top-right"
                  ? "-top-2 -right-2"
                  : position === "bottom-left"
                  ? "-bottom-2 -left-2"
                  : "-bottom-2 -right-2"
              }`}
              style={{ opacity: cornerOpacity }}
            />
          )
        )}

        {/* Resize handle */}
        <motion.div
          className="absolute -bottom-16 -right-[90px] w-20 h-20 cursor-se-resize"
          onMouseDown={handleMouseDown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={resizeSVG} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
}
