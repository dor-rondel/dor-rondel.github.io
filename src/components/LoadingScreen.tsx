import { useProgress } from "@react-three/drei"
import { useEffect, Dispatch, SetStateAction } from "react"

type LoadingScreenProps = {
  started: boolean
  setStarted: Dispatch<SetStateAction<boolean>>
}

export const LoadingScreen = ({ started, setStarted }: LoadingScreenProps) => {
  const { progress, total, loaded, item } = useProgress()

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true)
      }, 500)
    }
  }, [progress, total, loaded, item])

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
  flex items-center justify-center bg-indigo-50 
  ${started ? "opacity-0" : "opacity-100"}`}
    >
      <div className='text-4xl md:text-9xl font-bold text-indigo-900 relative'>
        <div
          className='absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500'
          style={{
            width: `${progress}%`,
          }}
        >
          Dor Rondel
        </div>
        <div className='opacity-40'>Dor Rondel</div>
      </div>
    </div>
  )
}
