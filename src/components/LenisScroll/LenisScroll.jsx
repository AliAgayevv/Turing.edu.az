import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  const [lenisRef, setLenisRef] = useState(null);
  const [rafState, setRafState] = useState(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rf;

    function raf(time) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }
    rf = requestAnimationFrame(raf);
    setRafState(rf);
    setLenisRef(scroller);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rf);
        lenisRef.destroy();
      }
    };
  }, []);

  return <div>{children}</div>;
}
