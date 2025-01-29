import { Sphere, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { MeshBasicMaterial, BackSide, Color } from "three"
const Background = () => {
  const material = useRef<MeshBasicMaterial>(null)
  const color = useRef({
    color: "#b9bcff",
  })
  const data = useScroll()
  const timeline = useRef<GSAPTimeline>()

  useFrame(() => {
    timeline.current?.progress(data.offset)

    if (!material.current) return
    material.current.color = new Color(color.current.color)
  })

  useEffect(() => {
    timeline.current = gsap.timeline()
    timeline.current.to(color.current, {
      color: "#212121",
    })
    timeline.current.to(color.current, {
      color: "#7a7ca5",
    })
    timeline.current.to(color.current, {
      color: "#9b96dd",
    })
  }, [])

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial ref={material} side={BackSide} toneMapped={false} />
      </Sphere>
    </group>
  )
}

export default Background
