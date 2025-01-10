import { useEffect } from "react";

function useOutsideClick(ref, callback) {
  useEffect(() => {
    /**
     * Call callback if clicked outside of the element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
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
