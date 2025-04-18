// import { useEffect, useState } from "react";
// import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  // const [lenisRef, setLenisRef] = useState<Lenis | null>(null);

  // console.log(lenisRef);

  // useEffect(() => {
  //   const scroller = new Lenis();
  //   let rf: number;

  //   function raf(time: number) {
  //     scroller.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   rf = requestAnimationFrame(raf);
  //   setLenisRef(scroller);

  //   return () => {
  //     setLenisRef((prevLenis) => {
  //       if (prevLenis) {
  //         cancelAnimationFrame(rf);
  //         prevLenis.destroy();
  //       }
  //       return null;
  //     });
  //   };
  // }, []);

  return <div>{children}</div>;
}
