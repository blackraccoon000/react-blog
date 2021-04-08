import React from "react"
import { Route, Switch } from "react-router-dom"

import PublicRoute from "./PublicRoute"
import PrivateRoute from "./PrivateRoute"
import CreateNote from "../components/CreateNote"
import Home from "../components/Home"

const AppRoutes = () => {
  return (
    <Switch>
      <PublicRoute path="/" component={Home} exact={true} />
      {/* <PublicRoute path="/create" component={CreateNote} exact={true} />
      <PublicRoute path="/edit/:id" component={CreateNote} /> */}
      <PrivateRoute path="/create" component={CreateNote} exact={true} />
      <PrivateRoute path="/edit/:id" component={CreateNote} />
    </Switch>
  )
}

export default AppRoutes