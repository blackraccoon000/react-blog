import React from "react"

const Home = (props) => {
  const history = props.history
  return (
    <div>
      <h1 data-testid="homeDisplay">This Component is Home</h1>
      <button  data-testid="homeToDashboardButton" onClick={()=>{
        history.push("/dashboard")
      }}>Go Dashboard</button>
    </div>
  )
}

export default Home