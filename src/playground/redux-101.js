// https://redux.js.org/

import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers } from "redux"
import { Provider, connect } from "react-redux"
import { sorByText } from "./actions"
// import { DateTime } from "luxon";

// import demoState from "./demoState"
// import { createBlog, removeBlog, editBlog,
//   setText, sorByDate, sorByText, setStartDate, setEndDate,
//   setSqueezeNum, sortOrderAscending, sortOrderDescending } from "./actions"
// import getVisibleBlogData from "./selector"
// import store from "./store"

// store.subscribe(()=>{
//   const state = store.getState()
//   const visibleBlogData = getVisibleBlogData(state.blogData, state.filters)
//   console.log(visibleBlogData,state.filters)
// })

/**
 * Dataset Sample
 */

// const createDataOne = {
//   title:"first blog",
//   note:"1 create blog now one",
//   createdAt:1000
// }

// const createDataTwo = {
//   title:"second blog",
//   note:"2 create blog now two",
//   createdAt:2000
// }

// const createDataThree = {
//   title:"third blog",
//   note:"3 create blog now three",
//   createdAt:5000
// }

// const createDataFour = {
//   title:"Forth blog",
//   note:"4 create blog now four",
//   createdAt:2000
// }

// const createDataFive = {
//   title:"Fifth blog",
//   note:"5 create blog now five",
//   createdAt:3000
// }

// const editData = {
//   title: "Update second blog",
//   note: "Update 2 create blog now"
// }

/**
 * dispatch samples
 */

// store.dispatch(createBlog(createDataOne))
// store.dispatch(createBlog(createDataTwo))

// // store.dispatch(setStartDate(2500))
// // store.dispatch(setEndDate(2000))
// // store.dispatch(removeBlog(store.getState().blogData[0].id))

// // store.dispatch(setText("one"))
// store.dispatch(sorByDate())

// store.dispatch(createBlog(createDataThree))

// store.dispatch(sortOrderDescending())
// // store.dispatch(sortOrderAscending())

// store.dispatch(createBlog(createDataFour))
// store.dispatch(createBlog(createDataFive))
// // store.dispatch(sorByText())
// // store.dispatch(setEndDate(DateTime.now().ts))

// store.dispatch(setSqueezeNum(2))
// store.dispatch(sortOrderAscending())

/**
 * JSX and Render
 */

const Info = (props) => (
  <Provider store={store}>
  </Provider>
)

ReactDOM.render(<Info info={store.getState()}/>,document.getElementById("app"))