import React from "react"
import { Route, Switch } from "react-router-dom"

import PublicRoute from "./PublicRoute"
import PrivateRoute from "./PrivateRoute"
import CreateNote from "../components/CreateNote"
import Home from "../components/Home"
import ImgLoad from "../playground/ImgLoad"

const AppRoutes = () => {
  return (
    <Switch>
      <PublicRoute path="/" component={Home} exact={true} />
      <PublicRoute path="/imgLoad" component={ImgLoad} />
      {/* <PublicRoute path="/create" component={CreateNote} exact={true} />
      <PublicRoute path="/edit/:id" component={CreateNote} /> */}
      <PrivateRoute path="/create" component={CreateNote} exact={true} />
      <PrivateRoute path="/edit/:id" component={CreateNote} />
    </Switch>
  )
}

export default AppRoutes