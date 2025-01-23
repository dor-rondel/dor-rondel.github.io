import { useState, useEffect } from "react"
import { useThree } from "@react-three/fiber"
import {
  Mesh,
  IcosahedronGeometry,
  MeshBasicMaterial,
  Object3DEventMap,
  Vector3,
  Raycaster,
} from "three"

import useCrosshairCursor from "./useCrosshairCursor"

const useLaserCannon = () => {
  const { crosshairs } = useCrosshairCursor()
  const { camera, scene } = useThree()

  const raycaster = new Raycaster()
  const direction = new Vector3()
  const impactPos = new Vector3()
  const impactColor = 0x00ff66

  const [lasers, setLasers] = useState<
    Mesh<IcosahedronGeometry, MeshBasicMaterial, Object3DEventMap>[]
  >([])

  useEffect(() => {
    if (!crosshairs) return

    const laserGeo = new IcosahedronGeometry(0.05, 2)

    const getLaserBolt = () => {
      const laserMat = new MeshBasicMaterial({
        color: 0xffcc00,
        transparent: true,
        fog: false,
      })

      const laserBolt = new Mesh(laserGeo, laserMat)
      laserBolt.position.copy(camera.position)

      let active = true
      let speed = 0.5

      const goalPos = camera.position
        .clone()
        .setFromMatrixPosition(crosshairs.matrixWorld)

      const laserDirection = new Vector3(0, 0, 0)
      laserDirection
        .subVectors(laserBolt.position, goalPos)
        .normalize()
        .multiplyScalar(speed)

      direction.subVectors(goalPos, camera.position)
      raycaster.set(camera.position, direction)

      const invisibleDodes = scene.children.filter(
        (o: any) =>
          o && o.geometry && o.geometry.type === "DodecahedronGeometry"
      )

      let intersects = raycaster.intersectObjects([...invisibleDodes], true)

      if (intersects.length > 0) {
        impactPos.copy(intersects[0].point)
        scene.remove(intersects[0].object)
      }

      let scale = 1.0
      let opacity = 1.0
      let isExploding = false

      const update = () => {
        if (active === true) {
          if (isExploding === false) {
            laserBolt.position.sub(laserDirection)

            if (laserBolt.position.distanceTo(impactPos) < 0.5) {
              laserBolt.position.copy(impactPos)
              laserBolt.material.color.set(impactColor)
              isExploding = true
            }
          } else {
            if (opacity > 0.01) {
              scale += 0.2
              opacity *= 0.85
            } else {
              opacity = 0.0
              scale = 0.01
              active = false
            }
            laserBolt.scale.setScalar(scale)
            laserBolt.material.opacity = opacity
            laserBolt.userData.active = active
          }
        }
      }
      laserBolt.userData = { update, active }
      return laserBolt
    }

    const fireLaser = () => {
      const laser = getLaserBolt()
      setLasers((prevLasers) => [...prevLasers, laser])
      scene.add(laser)
    }

    window.addEventListener("click", fireLaser)

    return () => {
      window.removeEventListener("click", fireLaser)
    }
  }, [camera, crosshairs, scene])

  return lasers
}

export default useLaserCannon
