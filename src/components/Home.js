import React from "react"
import NoteList from "./NoteList"

const Home = (props) => {
  const history = props.history
  return (
    <div>
      <div className="content-container">
        <NoteList/>
      </div>
    </div>
  )
}

export default Home