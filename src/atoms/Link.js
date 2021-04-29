import React from 'react';
import { ReactComponent as Logo } from '../img/playwell-icon-30_30.svg';
import PwIcon from './PwIcon';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkA = styled.a`
  color: black;
  :hover {
    color: blue;
  }
`;

const Link = (props) => {
  return (
    <div>
      {/* <PwIcon color="#ffcdd2" size="100" /> */}
      <PwIcon {...props} />
    </div>
  );
};

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Link.defaultProps = {
  color: '#ffcdd2',
  size: 100,
};

export default Link;
