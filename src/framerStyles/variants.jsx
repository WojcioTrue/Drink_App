export const mainView = {
    hidden: { opacity: 0 },
    show: (i) => ({ 
      opacity: 1, 
      transition: { 
        duration: 0.3,
        delay: i * 0.2
      } 
    })
  };