
export const navAnimation = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.9,
         type:"spring",
         bounce: 0.2
      }
    }
  }
  export const navItem = {
    hidden: {
      opacity: 0,
      y: '-20px',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
         type:"spring",
         bounce: 0.2
      }
    }
  }
  export const typingContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
         type:"spring",
         bounce: 0.2
      }
    }
  }
  export const typingText = {
    hidden: {
      opacity: 0,
      y: '-20px'
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
         type:"spring",
         bounce: 0.2
      }
    }
  }
  export const explainText = {
    hidden: {
      opacity: 0,
      y: '-100%'
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: .8,
         type:"spring",
         bounce: 0.2
      }
    }
  }
  export const buttonAnimation = {
    hidden: {
      opacity: 0,
      scaleX:0,
      width: '80px'
    },
    show: {
      opacity: 1,
      scaleX:1,
      width: '250px',
      transition: {
        delay: 1.3,
        duration: 0.4,
         type:"spring",
         bounce: 0.4
      }
    }
  }
  export const imgA1 = {
    hidden: {
      opacity: 0,
      scale:.5,
      y: '400px',
      width: '80px'
    },
    show: {
      opacity: 1,
      scale:1,
      y: 0,
      width: '250px',
      transition: {
        duration: 1,
        delay: 0.2,
         type:"spring",
         bounce: 0.2
      }
    }
  }
  export const imgA2 = {
    hidden: {
      opacity: 0,
      scale:.5,
      y: '400px',
      x: '50px',
      width: '80px'
    },
    show: {
      opacity: 1,
      scale:1,
      y: 0,
      x: 0,
      width: '250px',
      transition: {
        duration: 1,
        delay: 0.4,
         type:"spring",
         bounce: 0.2
      }
    }
  }

  export const sectionAnimate = {
    offscreen: {x: -100, opacity:0},
    onscreen: {
      x: 0,
      opacity:1,
      transition: {
        type:"spring",
        bounce: 0.4,
        duration:1
      }
    }
  }

  export const sectionFade = {
    offscreen: { opacity: 0},
    onscreen: {
      opacity:1,
      transition: {
        type:"spring",
        bounce: 0.4,
        duration: 4
      }
    }
  }