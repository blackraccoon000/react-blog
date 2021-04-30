import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import res from '../atoms/microcmsGetImg';

console.log(res.asyncData());

const ContentBox = (props) => {
  return (
    <div>
      <h1>Where the world builds software</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        corporis unde qui voluptatem. Delectus iste ipsum doloremque aliquam
        necessitatibus reiciendis incidunt, quam laborum, magnam esse officia
        reprehenderit vitae praesentium ea!
      </p>
      {/* <img src="" /> */}
    </div>
  );
};

export default ContentBox;
