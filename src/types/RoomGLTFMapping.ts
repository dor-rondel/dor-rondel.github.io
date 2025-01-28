import {
  Mesh,
  MeshStandardMaterial,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
} from "three"
import { GLTF } from "three-stdlib"

export type RoomGLTFMapping = GLTF & {
  nodes: {
    Plane001_Plane002_BlackWood001: Mesh
    Plane001_Plane002_BlackWood001_1: Mesh
    Plane001_Plane002_BlackWood001_2: Mesh
    Plane001_Plane002_BlackWood001_3: Mesh
    Plane001_Plane002_BlackWood001_4: Mesh
    SM_ShelfSM_Shelf1_1: Mesh
    SM_ShelfSM_Shelf1_1_1: Mesh
    ["Node-Mesh001"]: Mesh
    ["Node-Mesh001_1"]: Mesh
    ["Node-Mesh001_2"]: Mesh
    WawaRug: Mesh
    mesh434900071: Mesh
    mesh434900071_1: Mesh
    mesh434900071_2: Mesh
    mesh434900071_3: Mesh
    mesh434900071_4: Mesh
    mesh434900071_5: Mesh
    mesh425587018: Mesh
    mesh425587018_1: Mesh
    mesh425587018_2: Mesh
    mesh425587018_3: Mesh
    iMac_1: Mesh
    iMac_1_1: Mesh
    iMac_1_2: Mesh
    Comp_Mouse: Mesh
    mesh24448074: Mesh
    mesh24448074_1: Mesh
    mesh24448074_2: Mesh
    Houseplant_7_1: Mesh
    Houseplant_7_2: Mesh
    Houseplant_7_3: Mesh
    ["palm_tree_01-Mesh"]: Mesh
    ["palm_tree_01-Mesh_1"]: Mesh
    ["palm_tree_01-Mesh_2"]: Mesh
    ["Node-Mesh"]: Mesh
    ["Node-Mesh_1"]: Mesh
    Screen: Mesh
    Plane001: Mesh
    Plane001_1: Mesh
    Plane001_2: Mesh
    Plane001_3: Mesh
  }
  materials: {
    ["BlackWood.001"]: MeshStandardMaterial
    ["BlackCoatSteel.001"]: MeshStandardMaterial
    ["GrayPlastic.001"]: MeshStandardMaterial
    ["WhiteSteelScrew.001"]: MeshStandardMaterial
    ["BlackPlastic.001"]: MeshStandardMaterial
    lambert2SG: MeshStandardMaterial
    ["795548.001"]: MeshStandardMaterial
    lambert4SG: MeshStandardMaterial
    ["lambert2SG.001"]: MeshStandardMaterial
    ["lambert3SG.002"]: MeshBasicMaterial
    Rug: MeshStandardMaterial
    mat14: MeshStandardMaterial
    mat13: MeshStandardMaterial
    ["mat12.001"]: MeshStandardMaterial
    ["mat21.003"]: MeshStandardMaterial
    ["mat23.001"]: MeshStandardMaterial
    mat11: MeshStandardMaterial
    ["mat21.004"]: MeshStandardMaterial
    ["mat22.001"]: MeshStandardMaterial
    ["mat9.002"]: MeshStandardMaterial
    ["mat16.001"]: MeshStandardMaterial
    Screen: MeshStandardMaterial
    ScreenBlack: MeshStandardMaterial
    iMacBody: MeshStandardMaterial
    ["lambert3SG.003"]: MeshStandardMaterial
    ["mat9.003"]: MeshStandardMaterial
    ["mat20.001"]: MeshStandardMaterial
    ["mat21.005"]: MeshStandardMaterial
    ["Black.001"]: MeshStandardMaterial
    ["Brown.001"]: MeshStandardMaterial
    ["Plant_Green.001"]: MeshStandardMaterial
    ["8BC34A.001"]: MeshStandardMaterial
    ["DD9944.001"]: MeshStandardMaterial
    Office_Cha: MeshStandardMaterial
    Office_Cha_1: MeshStandardMaterial
    Floor: MeshStandardMaterial
    White: MeshStandardMaterial
    Wall: MeshStandardMaterial
    Glass: MeshPhysicalMaterial
  }
}
