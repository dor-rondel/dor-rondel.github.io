import { useEffect, useState } from "react"
import { useThree } from "@react-three/fiber"
import {
  Vector2,
  Group,
  Line,
  LineBasicMaterial,
  BufferGeometry,
  Float32BufferAttribute,
} from "three"

const useCrosshairCursor = () => {
  const { camera, scene } = useThree()
  const [crosshairs, setCrosshairs] = useState<Group | null>(null)

  useEffect(() => {
    const mousePos = new Vector2()
    const crosshairs = new Group()

    const crossMat = new LineBasicMaterial({
      color: 0xffffff,
    })

    const lineGeo = new BufferGeometry()
    const lineVerts = [0, 0.05, 0, 0, 0.02, 0]
    lineGeo.setAttribute("position", new Float32BufferAttribute(lineVerts, 3))

    for (let i = 0; i < 4; i++) {
      const line = new Line(lineGeo, crossMat)
      line.rotation.z = i * 0.5 * Math.PI
      crosshairs.add(line)
    }

    const onMouseMove = (evt: MouseEvent) => {
      const w = window.innerWidth
      const h = window.innerHeight
      const aspect = w / h
      const fudge = { x: aspect * 0.75, y: 0.75 }
      mousePos.x = ((evt.clientX / w) * 2 - 1) * fudge.x
      mousePos.y = (-1 * (evt.clientY / h) * 2 + 1) * fudge.y
      crosshairs.position.set(mousePos.x, mousePos.y, -1)
    }

    window.addEventListener("mousemove", onMouseMove)

    camera.add(crosshairs)
    scene.add(camera)

    setCrosshairs(crosshairs)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [camera, scene])

  return {
    crosshairs,
  }
}

export default useCrosshairCursor
