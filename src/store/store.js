import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers } from "redux"

import blogReducer from "./blogReducer"
import filtersReducer from "./filtersReducer"

const store = createStore(
  combineReducers({
    blogData: blogReducer,
    filters: filtersReducer
  })
)

export default store