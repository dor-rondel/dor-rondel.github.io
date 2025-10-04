import { atom } from "jotai"
import { Project } from "../types/Project"

export const projects: Project[] = [
  {
    title: "Degree Overview",
    url: "https://dor-rondel.github.io/MyCompSciDegree/#/",
    image: "projects/degree.png",
    description: "Overview of the courses I took in university",
  },
  {
    title: "DNAce",
    url: "https://github.com/dor-rondel/DNace",
    image: "projects/dnace.png",
    description: "Bioinformatics graphical analysis for FASTA genome files",
  },
    {
    title: "NBAyyy",
    url: "https://github.com/dor-rondel/confidential-rag-chatbot",
    image: "projects/nbayyy.png",
    description: "Seasonal NBA player statistics viewer",
  },
  {
    title: "3D Yu-Gi-Oh! Scene",
    url: "https://dor-rondel.github.io/r3f-yugioh-scene/",
    image: "projects/yugioh.png",
    description: "Speed Duel animated 3D board state",
  },
  {
    title: "Confidential RAG",
    url: "https://github.com/dor-rondel/NBAyyy",
    image: "projects/confidential-rag.png",
    description: "Locally run LLM and Emeddings to privately communicate with your files",
  },
  {
    title: "PDF Chatbot",
    url: "https://interactive-pdf-rag-chatbot-production.up.railway.app",
    image: "projects/pdf-chabot.png",
    description: "Chatbot for interacting with PDF documents with sources for answers",
  },
    {
    title: "3D Wormhole",
    url: "https://dor-rondel.github.io/wormhole-game/",
    image: "projects/wormhole.png",
    description: "ThreeJS collision detection wormhole scene",
  },
  {
    title: "3rd Person Flight",
    url: "https://dor-rondel.github.io/r3f-flight-scene/",
    image: "projects/flight.png",
    description: "Informational 3D flight scene concept",
  },
  {
    title: "RMC Website",
    url: "https://rockymountaincollectibles.com/",
    image: "projects/rmc.png",
    description: "Website for a former card shop in Colorado",
  },
  {
    title: "EscondePic",
    url: "https://github.com/fernflores0463/EscondePic",
    image: "projects/escondepic.png",
    description: "Hide messages for friends in the alpha channel of images",
  },
  {
    title: "PeerFindr",
    url: "https://github.com/dor-rondel/Peer-Findr",
    image: "projects/peerfindr.png",
    description: "Discover classmates before classes start",
  },
]

export const currentProjectAtom = atom(Math.floor(projects.length / 2))
