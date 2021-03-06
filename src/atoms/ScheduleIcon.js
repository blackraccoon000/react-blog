import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg.attrs((props) => {
  return {
    ariaHidden: 'true',
    fill: `${props.color}`,
    version: '1.1',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlSpace: 'preserve',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    width: `${props.width}`,
    height: `${props.height}`,
    x: 0,
    y: 0,
  };
})`
  opacity: 1;
`;

const ScheduleIcon = (props) => {
  return (
    <Svg {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </Svg>
  );
};

ScheduleIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

ScheduleIcon.defaultProps = {
  color: '#000',
  height: 24,
  width: 24,
};

export default ScheduleIcon;
