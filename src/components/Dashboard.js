import React from "react"

const Dashboard = (props) => {
  const history = props.history
  return (
    <div>
      <h1>This Component is Dashboard</h1>
      <button onClick={()=>{
        history.push("/")
        }}>Go Home</button>
    </div>
  )
}

export default Dashboard