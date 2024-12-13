import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface ApplyNow_btnProps {
  children: ReactNode;
}

const ApplyNow_btn: React.FC<ApplyNow_btnProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#2BA6EB] text-white py-2 px-2 w-full h-full rounded-full overflow-hidden relative"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-t from-[#2BA6EB] to-[#107ED8] z-0"
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default ApplyNow_btn;
