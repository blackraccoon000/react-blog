import React from "react"
import Spinner from "../img/spinner.png"

const ImgLoad = () => {
  return (
    <div>
      <img
        className="imgList"
        id="aaa"
        src={Spinner}
        onLoad={()=>{
          const getId = document.getElementById("aaa")
          setTimeout(() => {
            getId.setAttribute("src","https://images.dog.ceo/breeds/pug/n02110958_8724.jpg")
          }, 5000);
        }}
      />
    </div>
  )
}

export default ImgLoad

// var img = document.getElementById('myimage');
// var src = myimage.getAttribute('src');