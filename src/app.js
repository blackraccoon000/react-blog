import "./styles/style.css"
import Icon from "./img/favicon.png"

const component = () => {
  // console.log("test")
  const myIcon = new Image()
  myIcon.src = Icon

  const element = document.createElement("div")
  element.appendChild(myIcon)

  return element
}

// test()
document.body.appendChild(component())

