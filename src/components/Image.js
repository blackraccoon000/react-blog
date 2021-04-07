import React from "react"
import axios from "axios"
import Spinner from "../img/spinner.png"

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      imgSelect: undefined,
    }
  }
  componentDidMount() {
    const arr = [...Array(30)].map((_, i) => i);
    arr.map(_=> axios.get(`https://dog.ceo/api/breeds/image/random`)
      .then(res => {
        this.setState({ // setState is not function?
          images:this.state.images.concat(res.data.message)
        });
      })
      .catch(error=>console.log(error))
    )
  }
  imgSelect = (e) => {
    this.setState({
      imgSelect:e.target.src
    })
  }
  render() {
    return (
      <div className="content-container">
          {
            this.state.images.map(v => {
              const imageStyle = {
                backgroundImage: `url(${v}), url(${Spinner})`
              }
              return (
                <img
                  key={v.toString()}
                  src={v}
                  className="imgList"
                  onClick={this.imgSelect}
                  onLoad={()=> console.log("a")}
                  style={imageStyle}
                />
              )
            })
          }

        { this.state.imgSelect && (
          <div>
            <p>Selected Image</p>
            <img
              src={this.state.imgSelect}
              className="imgList"
            />
            <p>{this.state.imgSelect}</p>
          </div>
        )}
      </div>
    )
  }
}

export default Image