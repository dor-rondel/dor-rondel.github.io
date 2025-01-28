import { Image, Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { animate, useMotionValue } from "framer-motion"
import { motion } from "framer-motion-3d"
import { atom, useAtom } from "jotai"
import { useEffect, useRef } from "react"
import { BufferGeometry, Material, Mesh } from "three"

type Project = {
  title: string
  url: string
  image: string
  description: string
}

export const projects: Project[] = [
  {
    title: "3D Wormhole",
    url: "https://dor-rondel.github.io/wormhole-game/",
    image: "projects/wormhole.png",
    description: "ThreeJS collision detection wormhole scene",
  },
  {
    title: "DNAce",
    url: "https://github.com/dor-rondel/DNace",
    image: "projects/wormhole.png",
    description: "Bioinformatics graphical analysis for FASTA genome files",
  },
  {
    title: "NBAyyy",
    url: "https://github.com/dor-rondel/NBAyyy",
    image: "projects/nbayyy.png",
    description: "Seasonal NBA player statistics viewer",
  },
  {
    title: "Degree Overview",
    url: "https://dor-rondel.github.io/MyCompSciDegree/#/",
    image: "projects/degree.png",
    description: "Overview of the courses I took in university",
  },
  {
    title: "PeerFindr",
    url: "https://github.com/dor-rondel/Peer-Findr",
    image: "projects/wormhole.png",
    description: "Discover classmates before classes start",
  },
]

type ProjectProps = {
  project: Project
  highlighted: boolean
}

const Project = ({ project, highlighted }: ProjectProps) => {
  const background = useRef<Mesh<BufferGeometry, Material>>(null)
  const bgOpacity = useMotionValue(0.4)

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4)
  }, [highlighted])

  useFrame(() => {
    if (!background.current) return
    background.current.material.opacity = bgOpacity.get()
  })

  return (
    <group>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color='black' transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX='left'
        anchorY='top'
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX='left'
        anchorY='top'
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  )
}

export const currentProjectAtom = atom(Math.floor(projects.length / 2))

export const Projects = () => {
  const { viewport } = useThree()
  const [currentProject] = useAtom(currentProjectAtom)

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  )
}
