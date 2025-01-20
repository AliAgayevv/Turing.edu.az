"use client";
import resizeSVG from "../../assets/vectors/resize.svg";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export default function ResizableText() {
  const isMobile = useBreakpoint();
  // Track scroll progress
  const { scrollYProgress } = useScroll();

  console.log(isMobile);

  // Smooth animations driven by scroll progress
  const width = useSpring(
    useTransform(scrollYProgress, [0.4, 0.9], [10, window.innerWidth / 2]), // Start very small and grow
    { stiffness: 200, damping: 30 }
  );
  const mobileWidth = useSpring(
    useTransform(scrollYProgress, [0.3, 1], [10, window.innerWidth]), // Start very small and grow
    { stiffness: 1000, damping: 150 }
  );

  const height = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, 250]), // Initial height starts small
    { stiffness: 200, damping: 30 }
  );

  const textScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.5, 1]), // Start smaller and grow
    { stiffness: 200, damping: 30 }
  );

  const fontSize = useSpring(
    useTransform(scrollYProgress, [0, 1], [10, 100]), // Dynamically adjust font size
    { stiffness: 300, damping: 30 }
  );

  const frameBorderOpacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.5]), // Fade border
    { stiffness: 300, damping: 30 }
  );

  const cornerMarkerOpacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0]), // Fade out corner markers
    { stiffness: 300, damping: 30 }
  );

  return (
    <div className="w-full flex">
      {/* Animated container */}
      <motion.div id="resizable-div" className="relative flex items-start">
        {/* Frame containing text */}
        <motion.div
          className="border flex items-center justify-center p-4"
          style={{
            width: !isMobile ? width : mobileWidth, // Dynamic width based on scroll
            height: height, // Dynamic height based on scroll
            borderColor: `rgba(255, 255, 255, ${frameBorderOpacity.get()})`, // Border fade
            borderWidth: "2px",
          }}
        >
          {/* Animated text */}
          <motion.div
            className="text-white font-medium whitespace-nowrap leading-none text-wrap"
            style={{
              scale: textScale, // Text scale animation
              fontSize: fontSize.get(), // Dynamically set font size
            }}
          >
            Birlikdə inkişaf edək!
          </motion.div>
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
              style={{
                opacity: cornerMarkerOpacity.get(), // Corner marker fade
              }}
            />
          )
        )}

        {/* Resize handle */}
        <motion.div
          className="absolute -bottom-16 -right-[90px] w-20 h-20 cursor-se-resize"
          whileHover={{ scale: 1.1 }} // Hover interaction
          whileTap={{ scale: 0.95 }} // Tap interaction
        >
          <img src={resizeSVG} alt="Resize" />
        </motion.div>
      </motion.div>
    </div>
  );
}
