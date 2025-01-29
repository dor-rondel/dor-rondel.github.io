import { BufferGeometry, Material, Mesh } from "three"
import { Project } from "../../types/Project"
import { useEffect, useRef } from "react"
import { animate, useMotionValue } from "framer-motion"
import { useFrame } from "@react-three/fiber"
import { Image, Text } from "@react-three/drei"

type ProjectProps = {
  project: Project
  highlighted: boolean
}

const ProjectCard = ({ project, highlighted }: ProjectProps) => {
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

export default ProjectCard
