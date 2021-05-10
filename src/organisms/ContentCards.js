import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import BlogCard2 from '../molecules/BlogCard2';

const UnorderedList = styled.ul.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;

const ListItem = styled.li.attrs((props) => {})``;

const Array = ['', '', '', '', '', '', '', '', '', '', ''];

const ContentCards = (props) => {
  return (
    <UnorderedList>
      {Array.map((value, num) => {
        return (
          <ListItem key={`list_${num}`}>
            <BlogCard2 />
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default ContentCards;
