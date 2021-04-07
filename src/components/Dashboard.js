import React from "react"
import NoteList from "./NoteList"

const Dashboard = (props) => {
  const history = props.history
  return (
    <div>
      <div className="content-container">
        <NoteList/>
        <button onClick={()=>{
          history.push("/")
        }}>Go Home</button>
      </div>
    </div>
  )
}

export default Dashboard