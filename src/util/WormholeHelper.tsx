import { Camera, CatmullRomCurve3, Euler, TubeGeometry, Vector3 } from "three"
import splineData from "../data/splineData"
import WormholeDodeGeo from "../scenes/WormholeScene/WormholeDodeGeo"

const generateCurveFromVector3Array = (
  splineCoordinates: number[] = splineData
): CatmullRomCurve3 => {
  const points = []
  for (let p = 0; p < splineCoordinates.length; p += 3) {
    points.push(
      new Vector3(
        splineCoordinates[p],
        splineCoordinates[p + 1],
        splineCoordinates[p + 2]
      )
    )
  }
  return new CatmullRomCurve3(points)
}

const createTubeGeometry = (curve: CatmullRomCurve3): TubeGeometry =>
  new TubeGeometry(curve, 222, 0.65, 16, true)

export const animateCamera = (tubeGeo: TubeGeometry, camera: Camera) => {
  if (!tubeGeo) return
  const speed = Date.now() * 0.1
  const traversalTimeInMilliseconds = 10000
  const percentageOfTraversal =
    (speed % traversalTimeInMilliseconds) / traversalTimeInMilliseconds
  const segmentPosition = tubeGeo.parameters.path.getPointAt(
    percentageOfTraversal
  )
  const nextSegmentPosition = tubeGeo.parameters.path.getPointAt(
    (percentageOfTraversal + 0.03) % 1
  )
  camera.position.copy(segmentPosition)
  camera.lookAt(nextSegmentPosition)
}

export const tubeGeoInstance = createTubeGeometry(
  generateCurveFromVector3Array()
)

export const createDodecahedronArray = (
  amount: number,
  tubeGeo: TubeGeometry = tubeGeoInstance
): React.ReactElement[] => {
  const final: React.ReactElement[] = []

  for (let i = 0; i < amount; i += 1) {
    const p = (i / amount + Math.random() * 0.1) % 1
    const pos = tubeGeo.parameters.path.getPointAt(p)

    final.push(
      <WormholeDodeGeo
        key={i}
        position={
          new Vector3(
            pos.x + Math.random() - 0.4,
            pos.y,
            pos.z + Math.random() - 0.4
          )
        }
        rotation={
          new Euler(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          )
        }
        size={0.1}
      />
    )
  }

  return final
}
