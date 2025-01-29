import { motion } from "framer-motion"

type SectionProps = {
  children: React.ReactNode
  mobileTop?: boolean
}

const Scene = ({ children, mobileTop }: SectionProps) => (
  <motion.section
    className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start
    ${
      mobileTop
        ? "justify-start sm:justify-start md:justify-start lg:justify-center"
        : "justify-center"
    }
    `}
    initial={{
      opacity: 0,
      y: 50,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    }}
  >
    {children}
  </motion.section>
)

export default Scene
