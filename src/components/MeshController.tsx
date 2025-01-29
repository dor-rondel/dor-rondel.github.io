import { useFrame, useThree, GroupProps } from "@react-three/fiber"
import { animate, useMotionValue } from "framer-motion"
import { motion } from "framer-motion-3d"
import { useEffect, useRef, useState } from "react"
import { Group, Vector3 } from "three"
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei"

import { framerMotionConfig } from "../config"
import { Avatar } from "./Avatar"
import Background from "./Background"
import Room from "./Room"
import ProjectsContainer from "./Projects/ProjectsContainer"

type MeshControllerProps = {
  menuOpened: boolean
}

const MeshController = ({ menuOpened }: MeshControllerProps) => {
  const { viewport } = useThree()
  const data = useScroll()

  const isMobile = window.innerWidth < 768
  const responsiveRatio = viewport.width / 12
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9))

  const [scene, setScene] = useState(0)

  const cameraPositionX = useMotionValue(0)
  const cameraLookAtX = useMotionValue(0)

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, framerMotionConfig)
    animate(cameraLookAtX, menuOpened ? 5 : 0, framerMotionConfig)
  }, [menuOpened])

  const characterContainerAboutRef = useRef<Group>(null)
  const [characterAnimation, setCharacterAnimation] = useState("Typing")

  useEffect(() => {
    setCharacterAnimation("Falling")
    setTimeout(() => {
      setCharacterAnimation(scene === 0 ? "Typing" : "Standing")
    }, 600)
  }, [scene])

  const characterGroup = useRef<GroupProps>(null)

  useFrame((state) => {
    let curScene = Math.floor(data.offset * data.pages)

    if (curScene > 3) {
      curScene = 3
    }

    if (curScene !== scene) {
      setScene(curScene)
    }

    state.camera.position.x = cameraPositionX.get()
    state.camera.lookAt(cameraLookAtX.get(), 0, 0)

    if (scene === 0 && characterGroup.current !== null) {
      characterContainerAboutRef.current?.getWorldPosition(
        characterGroup.current.position as Vector3
      )
    }
  })

  return (
    <>
      <Background />
      <motion.group
        ref={characterGroup}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        animate={`${scene}`}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: officeScaleRatio,
            scaleY: officeScaleRatio,
            scaleZ: officeScaleRatio,
          },
          1: {
            y: -viewport.height + 0.5,
            x: isMobile ? 0.3 : 0,
            z: 7,
            rotateX: 0,
            rotateY: isMobile ? -Math.PI / 2 : 0,
            rotateZ: 0,
            scaleX: isMobile ? 1.5 : 1,
            scaleY: isMobile ? 1.5 : 1,
            scaleZ: isMobile ? 1.5 : 1,
          },
          2: {
            x: isMobile ? -1.4 : -2,
            y: -viewport.height * 2 + 0.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.24,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          },
        }}
      >
        <Avatar animation={characterAnimation} wireframe={scene === 1} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[
          isMobile ? 0 : 1.5 * officeScaleRatio,
          isMobile ? -viewport.height / 6 : 2,
          3,
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: isMobile ? -viewport.height / 6 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <Room section={scene} />
        <group
          ref={characterContainerAboutRef}
          name='CharacterSpot'
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[
          0,
          isMobile ? -viewport.height : -1.5 * officeScaleRatio,
          -10,
        ]}
        animate={{
          z: scene === 1 ? 0 : -10,
          y:
            scene === 1
              ? -viewport.height
              : isMobile
              ? -viewport.height
              : -1.5 * officeScaleRatio,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color='red'
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color='yellow'
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color='blue'
            />
          </mesh>
        </Float>
      </motion.group>
      <ProjectsContainer />
    </>
  )
}

export default MeshController
