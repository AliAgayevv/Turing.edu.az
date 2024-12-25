import React, { useState, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface ApplyNow_btnProps {
  isDisabled?: boolean;
}
// suggest
const ApplyNow_btn: React.FC<PropsWithChildren<ApplyNow_btnProps>> = ({
  children,
  isDisabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isDisabled}
      className={`bg-[#2BA6EB] text-white py-2 px-2 w-full h-full rounded-full overflow-hidden relative ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isHovered && !isDisabled ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-t from-[#2BA6EB] to-[#107ED8] z-0"
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default ApplyNow_btn;
