export const easePremium = [0.22, 1, 0.36, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: easePremium },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
}

export const floatTransition = {
  duration: 5,
  repeat: Infinity,
  ease: 'easeInOut' as const,
}

export const floatY: number[] = [0, -6, 0]
