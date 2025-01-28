import { ValueAnimationTransition } from "framer-motion"

type FramerConfig = ValueAnimationTransition & {
  type: string
  mass: number
  stiffness: number
  damping: number
  restDelta: number
}

export const framerMotionConfig: FramerConfig = {
  type: "spring",
  mass: 5,
  stiffness: 500,
  damping: 55,
  restDelta: 0.0001,
}
