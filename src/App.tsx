import { Scroll, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { MotionConfig } from "framer-motion"
import { Suspense, useEffect, useState } from "react"
import { Cursor } from "./scenes/Cursor"
import { Experience } from "./scenes/Experience"
import { Interface } from "./scenes/Interface"
import { LoadingScreen } from "./scenes/LoadingScreen"
import { Menu } from "./scenes/Menu"
import { ScrollManager } from "./scenes/ScrollManager"
import { framerMotionConfig } from "./config"

function App() {
  const [section, setSection] = useState(0)
  const [started, setStarted] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    setMenuOpened(false)
  }, [section])

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig transition={framerMotionConfig}>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach='background' args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                {started && <Experience menuOpened={menuOpened} />}
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
    </>
  )
}

export default App
