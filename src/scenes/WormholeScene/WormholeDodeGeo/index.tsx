import { Euler, Vector3 } from "three"

type WormholeDodeGeoProps = {
  position: Vector3
  rotation: Euler
  size: number
}

const WormholeDodeGeo = ({
  position,
  rotation,
  size,
}: WormholeDodeGeoProps) => {
  return (
    <mesh position={position} rotation={rotation}>
      <dodecahedronGeometry args={[size, 0]} />
      <meshMatcapMaterial color={0x00ff00} />
    </mesh>
  )
}

export default WormholeDodeGeo
