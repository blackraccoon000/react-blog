import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArticleFigure = styled.figure.attrs((props) => {
  return {
    style: {
      borderRadius: `${props.radius}`,
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
      width: `${props.width}`,
    },
  };
})`
  border: 1px;
  filter: blur(3px);
  justify-content: center;
  margin: 0 auto 10px auto;
  transform: rotate(15deg) scale(1.4);
  transition: 0.3s ease-in-out;

  &:hover {
    filter: blur(0);
    transform: scale(1);
  }
`;

const EntryImgTrans = (props) => {
  return (
    <ArticleFigure
      height={props.height}
      overflow={props.overflow}
      radius={props.radius}
    >
      <a href={props.link}>
        <ArticleImg src={props.src} width={props.width} />
      </a>
    </ArticleFigure>
  );
};

EntryImgTrans.propTypes = {
  height: PropTypes.string,
  link: PropTypes.string,
  radius: PropTypes.string,
  src: PropTypes.string,
  overflow: PropTypes.string,
  width: PropTypes.string,
};

EntryImgTrans.defaultProps = {
  height: '100%',
  link: '#',
  radius: '10px',
  src: '',
  overflow: 'hidden',
  width: '850px',
};

export default EntryImgTrans;
