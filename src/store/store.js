import { createStore, combineReducers } from "redux"

import blogReducer from "../reducers/blogReducer"
import filtersReducer from "../reducers/filtersReducer"

const store = createStore(
  combineReducers({
    blogData: blogReducer,
    filters: filtersReducer
  })
)

export default store