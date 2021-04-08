import React from "react"
import { connect } from "react-redux"
import axios from "axios"
import Spinner from "../img/spinner.png"
import { tempTitle, tempNote, tempLink, tempClear } from "../actions/tempActions"

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
                  // onClick={this.imgSelect}
                  onClick={(e)=>console.log(e.target.src)}
                  onClick={this.props.linkInput}
                  onLoad={()=> console.log("a")}
                  style={imageStyle}
                />
              )
            })
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imgSelect : state.imgSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tempLinkD: (link) => {
      console.log(link)
      dispatch(tempLink(link))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Image)
export { Image }