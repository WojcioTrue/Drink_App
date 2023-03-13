export const mainView = {
  hidden: { opacity: 0 },
  show: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: i * 1,
    },
  }),
};

export const categoryGestures = {
  tap: { scale: 0.95, transition: { duration: 0.15 } },
  hover: { scale: 1.1, transition: { duration: 0.15 } },
};

export const drinkInfo = {
  hidden: { y: -10, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: i * 0.2,
    },
  }),
};

export const singleDrink = {
  hidden: { opacity: 0, x: 15},
  show: { opacity: 1, x : 0, transition: { duration: 2 } },
  whileInView : { opacity: 1, x: 0, transition: { duration: 0.3 } }
};
