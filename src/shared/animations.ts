export const fadeRight = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.5 },
  variants: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }
}

export const fadeLeft = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.5 },
  variants: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }
}

export const fadeUp = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.5 },
  variants: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  }
}

export const fadeDown = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.5 },
  variants: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
}