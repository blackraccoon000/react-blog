import React from "react"
import { BrowserRouter } from "react-router-dom"
// import { createBrowserHistory } from "history"
import AppRoutes from "./AppRoutes"

// historyBugs : https://github.com/ReactTraining/react-router/issues/7415
// const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default AppRouter