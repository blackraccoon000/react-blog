import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArticleWrapper = styled.div.attrs((props) => {
  return {
    style: {
      height: `${props.height}`,
      overflow: `${props.overflow}`,
    },
  };
})`
  justify-content: center;
  margin: 0 auto;
`;

const ArticleImg = styled.img.attrs((props) => {
  return {
    src: `${props.src}`,
    style: {
      borderRadius: `${props.radius}`,
      width: `${props.width}`,
    },
  };
})`
  justify-content: center;
  margin: 0 auto 10px auto;
  transform: scale(1);
`;

const EntryImg = (props) => {
  return (
    <ArticleWrapper height={props.height} overflow={props.overflow}>
      <a href={props.link}>
        <ArticleImg src={props.src} radius={props.radius} width={props.width} />
      </a>
    </ArticleWrapper>
  );
};

EntryImg.propTypes = {
  height: PropTypes.string,
  link: PropTypes.string,
  radius: PropTypes.string,
  src: PropTypes.string,
  overflow: PropTypes.string,
  width: PropTypes.string,
};

EntryImg.defaultProps = {
  height: '100%',
  link: '#',
  radius: '10px',
  src: '',
  overflow: 'hidden',
  width: '850px',
};

export default EntryImg;
