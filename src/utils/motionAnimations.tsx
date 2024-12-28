export const yToCenter = (startPosition: number) => {
  return {
    hidden: { opacity: 0, translateY: startPosition },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
};

export const xToCenter = (startPosition: number) => {
  return {
    hidden: { opacity: 0, translateX: startPosition },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
};
