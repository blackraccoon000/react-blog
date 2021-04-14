import React from 'react';
import axios from 'axios';
import Spinner from '../img/spinner.png';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }
  componentDidMount() {
    axios.defaults.headers.post['Content-Type'] =
      'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const arr = [...Array(9)].map((_, i) => i);
    arr.map((_) =>
      axios
        .get(`https://dog.ceo/api/breeds/image/random`)
        .then((res) => {
          this.setState({
            // setState is not function?
            images: this.state.images.concat(res.data.message),
          });
        })
        .catch((error) => console.log(error))
    );
  }
  render() {
    return (
      <div className="article-editor__container--img">
        {this.state.images.map((v, i) => {
          return (
            <img
              key={`${i}_${v.toString()}`}
              src={Spinner}
              id={`img-list-num-${i}`}
              className="article-editor__img--selector"
              onClick={this.props.linkInput}
              onLoad={() => {
                const getId = document.getElementById(`img-list-num-${i}`);
                getId.setAttribute('src', v);
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default Image;
