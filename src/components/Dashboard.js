import React from "react"
import NoteList from "./NoteList"
import NoteListFilters from "./NoteListFilters"

const Dashboard = (props) => {
  const history = props.history
  return (
    <div>
      <div className="content-container">
        {/* <h1>This Component is Dashboard</h1> */}
        <NoteListFilters/>
        <NoteList/>
        <button onClick={()=>{
          history.push("/")
        }}>Go Home</button>
      </div>
    </div>
  )
}

export default Dashboard