import "./styles/styles.scss"
import Icon from "./img/favicon.png"

// const component = () => {
//   // console.log("test")
//   const myIcon = new Image()
//   myIcon.src = Icon

//   const element = document.createElement("div")
//   element.appendChild(myIcon)

//   return element
// }

// // test()
// document.body.appendChild(component())


import React from "react"
import ReactDOM from "react-dom"

const jsx = (
  <div>
    <h1>Hello World</h1>
    <h2>Good to see you here we go!</h2>
  </div>
)

ReactDOM.render(jsx,document.getElementById('app'))