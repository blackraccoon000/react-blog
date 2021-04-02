import { createStore, combineReducers } from "redux"

import blogReducer from "../reducers/blogReducer"
import filtersReducer from "../reducers/filtersReducer"
// import tempReducer from "../reducers/tempReducer"

const store = createStore(
  combineReducers({
    blogData: blogReducer,
    filters: filtersReducer,
    // temp: tempReducer
  })
)

export default store