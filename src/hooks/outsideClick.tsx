import React, { useEffect } from "react";

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void {
  useEffect(() => {
    /**
     * Call callback if clicked outside of the element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
