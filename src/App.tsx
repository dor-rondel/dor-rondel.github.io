import { Scroll, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { MotionConfig } from "framer-motion"
import { Suspense, useEffect, useState } from "react"
import { Cursor } from "./components/Cursor"
import MeshController from "./components/MeshController"
import SceneContainer from "./components/SceneContainer"
import { LoadingScreen } from "./components/LoadingScreen"
import { Menu } from "./components/Menu"
import { ScrollManager } from "./components/ScrollManager"
import { framerMotionConfig } from "./config"

function App() {
  const [scene, setScene] = useState(0)
  const [started, setStarted] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    setMenuOpened(false)
  }, [scene])

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig transition={framerMotionConfig}>
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach='background' args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={scene} handleSceneChange={setScene} />
            <Scroll>
              <Suspense>
                {started && <MeshController menuOpened={menuOpened} />}
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <SceneContainer setScene={setScene} />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          handleSceneChange={setScene}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
    </>
  )
}

export default App
