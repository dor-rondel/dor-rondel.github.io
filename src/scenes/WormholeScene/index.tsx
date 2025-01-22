import { Suspense, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import WormholeTube from "./WormholeTube"
import WormholeLights from "./WormholeLights"

import "./Wormhole.scss"
import { createDodecahedronArray } from "../../util/WormholeHelper"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

const WormholeScene = () => {
  const dodecahedrons = useMemo<React.ReactElement[]>(
    () => createDodecahedronArray(70),
    []
  )

  return (
    <Canvas camera={{ position: [0, 0, -2], fov: 65 }}>
      <fogExp2 attach='fog' color={0x000000} density={0.3} />
      <color attach='background' args={["#000"]} />
      <WormholeLights />
      <Suspense fallback={null}>
        <WormholeTube />
        {dodecahedrons}
      </Suspense>
      <OrbitControls />
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} />
      </EffectComposer>
    </Canvas>
  )
}

export default WormholeScene
