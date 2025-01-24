import { Suspense, useMemo } from "react"
import { Canvas } from "@react-three/fiber"

import WormholeTube from "./WormholeTube"
import WormholeLights from "./WormholeLights"

import "./Wormhole.scss"
import { createLogoBoxesArray } from "../../util/WormholeHelper"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

const WormholeScene = () => {
  const logoBoxes = useMemo<React.ReactElement[]>(
    () => createLogoBoxesArray(120),
    []
  )

  return (
    <Canvas camera={{ position: [0, 0, -2], fov: 65 }}>
      <fogExp2 attach='fog' color={0x000000} density={0.3} />
      <color attach='background' args={["#000"]} />
      <WormholeLights />
      <Suspense fallback={null}>
        <WormholeTube />
        {logoBoxes}
      </Suspense>
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={0} />
      </EffectComposer>
    </Canvas>
  )
}

export default WormholeScene
