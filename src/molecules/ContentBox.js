import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import res from '../atoms/microcmsGetImg';

class ContentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      string: '',
      url: '',
    };
  }
  componentDidMount() {
    res.asyncData().then((value) => {
      console.log(value.data);
      this.setState({
        title: value.data.head,
        string: value.data.string,
        url: value.data.image.url,
      });
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.string}</p>
        <img src={this.state.url} />
      </div>
    );
  }
}

export default ContentBox;
