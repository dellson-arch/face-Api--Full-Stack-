
import FacialExpressions from "./components/FacialExpressions"
import MoodSongs from "./components/MoodSongs"
import './App.css'
import { useState } from "react"



const App = () => {
  const [Songs,setSongs] = useState([
  ])

  return (
    <>
      <FacialExpressions setSongs = {setSongs}/>
      <MoodSongs Songs={Songs}/>
    </>
  )
}

export default App
