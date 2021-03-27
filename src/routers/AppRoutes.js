import React from "react"
import { Route, Switch } from "react-router-dom"

import PublicRoute from "./PublicRoute"
import Dashboard from "../components/Dashboard"
import Home from "../components/Home"

const AppRoutes = () => {
  return (
    <Switch>
      {/* <Route path="/" component={Home} exact={true}/>
      <Route path="/dashboard" component={Dashboard}/> */}
      <PublicRoute path="/" component={Home} exact={true} />
      <PublicRoute path="/dashboard" component={Dashboard} exact={true} />
    </Switch>
  )
}

export default AppRoutes