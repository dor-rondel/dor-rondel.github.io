import { SkinnedMesh, Bone, MeshStandardMaterial } from "three"
import { GLTF } from "three-stdlib"

export type AvatarGLTFMapping = GLTF & {
  nodes: {
    Wolf3D_Body: SkinnedMesh
    Wolf3D_Outfit_Bottom: SkinnedMesh
    Wolf3D_Outfit_Footwear: SkinnedMesh
    Wolf3D_Outfit_Top: SkinnedMesh
    Wolf3D_Hair: SkinnedMesh
    EyeLeft: SkinnedMesh
    EyeRight: SkinnedMesh
    Wolf3D_Head: SkinnedMesh
    Wolf3D_Teeth: SkinnedMesh
    Hips: Bone
  }
  materials: {
    Wolf3D_Body: MeshStandardMaterial
    Wolf3D_Outfit_Bottom: MeshStandardMaterial
    Wolf3D_Outfit_Footwear: MeshStandardMaterial
    Wolf3D_Outfit_Top: MeshStandardMaterial
    Wolf3D_Hair: MeshStandardMaterial
    Wolf3D_Eye: MeshStandardMaterial
    Wolf3D_Skin: MeshStandardMaterial
    Wolf3D_Teeth: MeshStandardMaterial
  }
}
