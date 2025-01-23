import { useFrame, useThree } from "@react-three/fiber"
import { animateCamera, tubeGeoInstance } from "../../../util/WormholeHelper"
import useLaserCannon from "../../../hooks/useLaserCannon"

const WormholeTube = () => {
  const { camera } = useThree()
  const lasers = useLaserCannon()

  useFrame(() => {
    animateCamera(tubeGeoInstance, camera)
    lasers.forEach((laser) => laser.userData.update())
  })

  return (
    <mesh>
      <lineSegments>
        <edgesGeometry args={[tubeGeoInstance]} />
        <lineBasicMaterial color={0x0099ff} />
      </lineSegments>
    </mesh>
  )
}

export default WormholeTube
