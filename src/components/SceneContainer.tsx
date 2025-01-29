import { SceneChildProps } from "../types/SceneChildProps"
import ContactScene from "./Contact/ContactScene"
import ProjectsScene from "./Projects/ProjectsScene"
import IntroductionScene from "./Room/IntroductionScene"
import SkillsScene from "./Skills/SkillsScene"

const SceneContainer = ({ setScene }: SceneChildProps) => (
  <div className='flex flex-col items-center w-screen'>
    <IntroductionScene setScene={setScene} />
    <SkillsScene />
    <ProjectsScene />
    <ContactScene />
  </div>
)

export default SceneContainer
