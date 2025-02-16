import React, { useEffect } from "react";

function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  toggleButtonRef?: React.RefObject<HTMLElement> // Add a ref for the toggle button
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!toggleButtonRef?.current ||
          !toggleButtonRef.current.contains(event.target as Node)) // Prevent closing when clicking the button
      ) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, toggleButtonRef, callback]);
}

export default useOutsideClick;
