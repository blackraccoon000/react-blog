import React from "react"
import axios from "axios"
import Spinner from "../img/spinner.png"

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
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
                  onClick={this.props.linkInput}
                  style={imageStyle}
                />
              )
            })
          }
      </div>
    )
  }
}

export default Image