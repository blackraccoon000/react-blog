import React from "react"
import { Route, Switch } from "react-router-dom"

import PublicRoute from "./PublicRoute"
import CreateNote from "../components/CreateNote"
import Dashboard from "../components/Dashboard"
import Home from "../components/Home"

const AppRoutes = () => {
  return (
    <Switch>
      {/* <Route path="/" component={Home} exact={true}/>
      <Route path="/dashboard" component={Dashboard}/> */}
      <PublicRoute path="/" component={Home} exact={true} />
      <PublicRoute path="/dashboard" component={Dashboard} exact={true} />
      <PublicRoute path="/create" component={CreateNote} exact={true} />
      <PublicRoute path="/edit/:id" component={CreateNote} />
    </Switch>
  )
}

export default AppRoutes