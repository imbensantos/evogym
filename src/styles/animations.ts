const initialSettings = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.5 },
}

const delaySettings = {
  ...initialSettings,
  transition: {
    duration: 0.5,
    delay: 0.2
  }
}

export const fadeRight = {
  ...initialSettings,
  variants: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }
}

export const fadeLeft = {
  ...initialSettings,
  variants: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }
}

export const fadeDown = {
  ...initialSettings,
  variants: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  }
}

export const fadeUp = {
  ...initialSettings,
  variants: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
}

export const staggerChildren = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }
}

export const zoomOut = {
  ...initialSettings,
  variants: {
    hidden: { opacity: 0, scale: .5 },
    visible: { opacity: 1, scale: 1 }
  }
}

export const zoomIn = {
  ...initialSettings,
  variants: {
    hidden: { opacity: 0, scale: 1.5 },
    visible: { opacity: 1, scale: 1 }
  }
}