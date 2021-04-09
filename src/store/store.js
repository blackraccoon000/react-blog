import { createStore, combineReducers } from "redux"
import { v4 as uuidv4 } from "uuid" // Use mock

import blogReducer from "../reducers/blogReducer"
import filtersReducer from "../reducers/filtersReducer"
import authReducer from "../reducers/authReducer"

const store = createStore(
  combineReducers({
    blogData: blogReducer,
    filters: filtersReducer,
    auth: authReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store