import React from "react"
import ReactDOM from "react-dom"

import "normalize.css/normalize.css"
import "./styles/styles.scss"

import Header from "./components/Header"
import Icon from "./img/favicon.png"

const jsx = (
  <div>
    <Header />
    <h1>Hello World</h1>
    <h2>Good to see you here we go!</h2>
  </div>
)

console.log("test")

ReactDOM.render(jsx,document.getElementById('app'))