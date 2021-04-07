import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "normalize.css/normalize.css"
import "./styles/styles.scss"

import Icon from "./img/favicon.png"
import AppRouter from "./routers/AppRouter"
import store from "./store/store"
import database, {firebase} from "./firebase/firebase"
import { createBlog, setBlog } from "./actions/blogActions"
import { googleLogin, login, logout } from "./actions/authActions"
import { setText, sortByDate, sortByText, setStartDate, setEndDate,
  setSqueezeNum, sortOrderAscending, sortOrderDescending } from "./actions/filterActions"
import { createDataOne, createDataTwo, createDataThree, createDataFour, createDataFive } from "./tests/fixtures/createData"
import getVisibleBlogData from "./selectors/getVisibleBlogData"
// import axios from "./playground/test-axios"
// import blogData from "./tests/fixtures/blogNoteSample"
// import "./playground/arraySample"

store.subscribe(()=>{
  const state = store.getState()
  console.log("all ",state)
})

// データの取得
const uid = process.env.FIREBASE_LOGIN_UID
database.ref(`users/${uid}`)
.once("value").then(snapshot=>{
  const blogData = []
  snapshot.forEach(cs => {
    blogData.push({
      id:cs.key,
      ...cs.val()
    })
  })
  store.dispatch(setBlog(blogData))
})

// ログインの確認
firebase.auth().onAuthStateChanged(user=>{
  if(user) {
    store.dispatch(login(user.uid))
  } else {
    console.log("No Sign In")
  }
})

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))