import { useAtom } from "jotai"

import { currentProjectAtom, projects } from "../../data/projects"
import Scene from "../Scene"

const ProjectsScene = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom)

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length)
  }

  return (
    <Scene>
      <div className='flex w-full h-full gap-8 items-center justify-center'>
        <button
          className='hover:text-indigo-600 transition-colors'
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className='text-3xl md:text-5xl font-bold'>Projects</h2>
        <button
          className='hover:text-indigo-600 transition-colors'
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Scene>
  )
}

export default ProjectsScene
