import React from "react"


const Home = (props) => {
  const history = props.history
  return (
    <div>
      <div className="content-container">
        <button  data-testid="homeToDashboardButton" onClick={()=>{
          history.push("/dashboard")
        }}>Go Dashboard</button>
      </div>
    </div>
  )
}

export default Home