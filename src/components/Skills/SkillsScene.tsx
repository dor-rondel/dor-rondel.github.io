import { motion } from "framer-motion"

import Scene from "../Scene"
import languages from "../../data/languages"
import skills from "../../data/skills"

const SkillsScene = () => (
  <Scene>
    <motion.div className='w-full' whileInView={"visible"}>
      <h2 className='text-3xl md:text-5xl font-bold text-white'>Skills</h2>
      <div className='mt-8 space-y-4'>
        {skills.map((skill, index) => (
          <div className='w-full md:w-64' key={index}>
            <motion.h3
              className='text-lg md:text-xl font-bold text-gray-100'
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 + index * 0.2,
                  },
                },
              }}
            >
              {skill.title}
            </motion.h3>
            <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
              <motion.div
                className='h-full bg-indigo-500 rounded-full '
                style={{ width: `${skill.level}%` }}
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className='text-3xl md:text-5xl font-bold mt-10 text-white'>
          Languages
        </h2>
        <div className='mt-8 space-y-4'>
          {languages.map((lng, index) => (
            <div className='w-full md:w-64' key={index}>
              <motion.h3
                className='text-lg md:text-xl font-bold text-gray-100'
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 2 + index * 0.2,
                    },
                  },
                }}
              >
                {lng.title}
              </motion.h3>
              <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                <motion.div
                  className='h-full bg-indigo-500 rounded-full '
                  style={{ width: `${lng.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </Scene>
)

export default SkillsScene
