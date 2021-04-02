import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "normalize.css/normalize.css"
import "./styles/styles.scss"

import Icon from "./img/favicon.png"
import AppRouter from "./routers/AppRouter"
import store from "./store/store"
import { createBlog } from "./actions/blogActions"
import { setText, sorByDate, sorByText, setStartDate, setEndDate,
  setSqueezeNum, sortOrderAscending, sortOrderDescending } from "./actions/filterActions"
import { createDataOne, createDataTwo, createDataThree, createDataFour, createDataFive } from "./tests/fixtures/createData"
import getVisibleBlogData from "./selectors/getVisibleBlogData"

store.subscribe(()=>{
  const state = store.getState()
  console.log("all ",state)
  // const visibleBlogData = getVisibleBlogData(state.blogData, state.filters)
  // console.log("squeeze ",visibleBlogData)
})

store.dispatch(sorByDate())
store.dispatch(sortOrderDescending())
// store.dispatch(sortOrderAscending())
store.dispatch(createBlog(createDataOne))
store.dispatch(createBlog(createDataTwo))
store.dispatch(createBlog(createDataThree))
store.dispatch(createBlog(createDataFour))
store.dispatch(createBlog(createDataFive))
// store.dispatch(setText("one"))

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))