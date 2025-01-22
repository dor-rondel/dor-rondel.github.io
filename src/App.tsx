import { useEffect, useState } from "react"

import WormholeScene from "./scenes/WormholeScene"

import "./App.scss"

function App() {
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowMessage(false), 5000)
  }, [])

  return (
    <>
      {showMessage && (
        <p className='read-the-docs'>
          I'm currently working on a 3D version of this page, check back later
          to see it!
        </p>
      )}
      {!showMessage && <WormholeScene />}
    </>
  )
}

export default App
