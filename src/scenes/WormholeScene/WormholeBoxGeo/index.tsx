import { Euler, Vector3 } from "three"
import { useTexture } from "@react-three/drei"

type WormholeBoxGeoProps = {
  position: Vector3
  rotation: Euler
  size: number
  logo: string
}

const WormholeBoxGeo = ({
  position,
  rotation,
  size,
  logo,
}: WormholeBoxGeoProps) => {
  const texture = useTexture(logo)
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry attach='geometry' args={[size, size, size]} />
      <meshMatcapMaterial map={texture} color={0xffffff} />
    </mesh>
  )
}

export default WormholeBoxGeo
