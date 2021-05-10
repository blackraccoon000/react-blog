import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class HeroImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero1: '',
      hero2: '',
      hero3: '',
      hero4: '',
      description1: '',
      description2: '',
      description3: '',
      description4: '',
    };
  }
  componentDidMount() {
    const res = {
      async asyncData() {
        return await axios.get('https://playwell.microcms.io/api/v1/heroimg', {
          headers: {
            'X-API-KEY': process.env.X_API_KEY,
          },
        });
      },
    };
    res.asyncData().then((value) => {
      console.log(value.data.contents[0].description1);
      this.setState({
        hero1: value.data.contents[0].img1.url,
        hero2: value.data.contents[0].img2.url,
        hero3: value.data.contents[0].img3.url,
        hero4: `${value.data.contents[0].img4.url}?fit=crop&w=800&h=533`,
        description1: value.data.contents[0].description1,
        description2: value.data.contents[0].description2,
        description3: value.data.contents[0].description3,
        description4: value.data.contents[0].description4,
      });
    });
  }
  render() {
    return (
      <Carousel {...this.props}>
        <div>
          <img src={this.state.hero1} />
          {/* <p className="legend">{this.state.description1}</p> */}
        </div>
        <div>
          <img src={this.state.hero2} />
          {/* <p className="legend">{this.state.description2}</p> */}
        </div>
        <div>
          <img src={this.state.hero3} />
          {/* <p className="legend">{this.state.description3}</p> */}
        </div>
        <div>
          <img src={this.state.hero4} />
          {/* <p className="legend">{this.state.description4}</p> */}
        </div>
      </Carousel>
    );
  }
}

HeroImg.propTypes = {
  axis: PropTypes.string,
  animationHandler: PropTypes.string,
  centerSlidePercentage: PropTypes.number,
  swipeable: PropTypes.bool,
  showArrows: PropTypes.bool,
  showStatus: PropTypes.bool,
  showIndicators: PropTypes.bool,
  infiniteLoop: PropTypes.bool,
  showThumbs: PropTypes.bool,
  useKeyboardArrows: PropTypes.bool,
  autoPlay: PropTypes.bool,
  stopOnHover: PropTypes.bool,
  dynamicHeight: PropTypes.bool,
  emulateTouch: PropTypes.bool,
  autoFocus: PropTypes.bool,
  thumbWidth: PropTypes.number,
  selectedItem: PropTypes.number,
  interval: PropTypes.number,
  transitionTime: PropTypes.number,
  swipeScrollTolerance: PropTypes.number,
  width: PropTypes.string,
};

HeroImg.defaultProps = {
  axis: 'horizontal',
  animationHandler: 'fade',
  centerMode: false,
  centerSlidePercentage: 80,
  swipeable: false,
  showArrows: true,
  showStatus: true,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: true,
  useKeyboardArrows: true,
  autoPlay: true,
  stopOnHover: true,
  dynamicHeight: true,
  emulateTouch: true,
  autoFocus: false,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 2000,
  transitionTime: 500,
  swipeScrollTolerance: 5,
  width: '533px',
};

export default HeroImg;
