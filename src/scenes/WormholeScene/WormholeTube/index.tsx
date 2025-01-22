import { useFrame, useThree } from "@react-three/fiber"

import { animateCamera, tubeGeoInstance } from "../../../util/WormholeHelper"

const WormholeTube = () => {
  const { camera } = useThree()

  useFrame(() => {
    animateCamera(tubeGeoInstance, camera)
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
