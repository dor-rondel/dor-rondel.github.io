import { useThree } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { useAtom } from "jotai"

import ProjectCard from "./ProjectCard"
import { projects, currentProjectAtom } from "../../data/projects"

const ProjectsContainer = () => {
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
          <ProjectCard
            project={project}
            highlighted={index === currentProject}
          />
        </motion.group>
      ))}
    </group>
  )
}

export default ProjectsContainer
