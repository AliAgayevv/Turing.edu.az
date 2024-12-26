import { useState, useEffect } from "react";

/**
 * Custom hook to detect if viewport is below a certain breakpoint
 * @param breakpoint - Breakpoint in pixels (default: 1024 for lg)
 * @returns boolean indicating if viewport is below breakpoint
 */
export const useBreakpoint = (breakpoint: number = 1024) => {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsBelowBreakpoint(window.innerWidth < breakpoint);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isBelowBreakpoint;
};
