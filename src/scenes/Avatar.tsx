import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { Group } from "three"

import { AvatarGLTFMapping } from "../types/AvatarGLTFMapping"

type AvatarProps = {
  animation: string
  wireframe: boolean
}

export function Avatar({ animation, wireframe }: AvatarProps) {
  const group = useRef<Group>(null)

  const { nodes, materials } = useGLTF("models/avatar.glb") as AvatarGLTFMapping

  const { animations: typingAnimation } = useFBX("animations/Typing.fbx")
  const { animations: standingAnimation } = useFBX(
    "animations/Standing Idle.fbx"
  )
  const { animations: fallingAnimation } = useFBX("animations/Falling Idle.fbx")

  typingAnimation[0].name = "Typing"
  standingAnimation[0].name = "Standing"
  fallingAnimation[0].name = "Falling"

  const { actions } = useAnimations(
    [typingAnimation[0], standingAnimation[0], fallingAnimation[0]],
    group
  )

  useEffect(() => {
    actions[animation]!.reset().fadeIn(0.5).play()
    return () => {
      actions[animation]!.reset().fadeOut(0.5)
    }
  }, [animation])

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe
    })
  }, [wireframe])

  return (
    <group ref={group} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name='EyeLeft'
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name='EyeRight'
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name='Wolf3D_Head'
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name='Wolf3D_Teeth'
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials["Wolf3D_Outfit_Bottom.002"]}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload("models/avatar.glb")
useFBX.preload("animations/Typing.fbx")
useFBX.preload("animations/Standing Idle.fbx")
useFBX.preload("animations/Falling Idle.fbx")
