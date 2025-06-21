import Scene from "../Scene"
import { motion } from "framer-motion"
import { SceneChildProps } from "../../types/SceneChildProps"

const IntroductionScene = ({ setScene }: SceneChildProps) => (
  <Scene mobileTop>
    <h1 className='text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0'>
      Hi, I'm
      <br className="md:leading-relaxed"/>
      <span className='bg-white px-1 italic'>Dor Rondel</span>
    </h1>
    <motion.p
      className='text-lg text-gray-600 mt-4'
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 1.5,
      }}
    >
      A software engineer exploring the intersection&nbsp;
      {window.innerWidth > 600 && <br />}
      between 3D experiences, LLMs & Blockchain
    </motion.p>
    <motion.button
      onClick={() => setScene(3)}
      className={`bg-indigo-600 text-white py-4 px-8 
        rounded-lg font-bold text-lg mt-4 md:mt-16`}
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 2,
      }}
    >
      Contact me
    </motion.button>
  </Scene>
)

export default IntroductionScene
