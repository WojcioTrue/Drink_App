import { Variants } from "framer-motion";

export const appVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const grayBackground: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.10,
    },
  },
};

export const ingredientPrompt: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.10 } },
};

export const mainView: Variants = {
  hidden: { opacity: 0 },
  show: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: i * 1,
    },
  }),
};

export const categoryGestures: Variants = {
  tap: { scale: 0.97, transition: { duration: 0.15 } },
  hover: { scale: 1.07, transition: { duration: 0.15 } },
};

export const drinkInfo: Variants = {
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

export const singleDrink: Variants = {
  hidden: { opacity: 0, x: 15 },
  show: { opacity: 1, x: 0, transition: { duration: 2 } },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};

export const notificationPrompt: Variants = {
  hidden: { opacity: 0, x: -15 },
  show: { opacity: 1, x: 0 }
}

export const favouriteButton: Variants = {
  hidden: { opacity: 0, x: -15 },
  show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.2, delay: 0.15 } },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
}

export const coctailButton: Variants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95, transition: { duration: 0.2, type: "string", stiffness: 400, damping: 17 } },
}

export const noFavouriteDrinks: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}