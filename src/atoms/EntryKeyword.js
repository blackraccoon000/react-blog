import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Article = styled.div.attrs((props) => {
  return {
    style: {
      width: `${props.width}px`,
    },
  };
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Category = styled.span.attrs((props) => {
  return {
    style: {
      border: `1px solid ${props.color}`,
      color: `${props.color}`,
      margin: `${props.margin}`,
    },
  };
})`
  padding: 2px 8px;
  white-space: nowrap;
  border-radius: 3px;
  font-size: 11px;
`;

const CategoryLink = styled.a.attrs((props) => {
  return {
    style: {
      color: `${props.color}`,
    },
  };
})`
  text-decoration: none;
`;

const EntryKeyword = (props) => {
  return (
    <Article width={props.width}>
      {props.keywords.map((keyword, num) => {
        return (
          <Category key={`${keyword}_${num}`} {...props}>
            <CategoryLink href={`category/${keyword}`} {...props}>
              {keyword}
            </CategoryLink>
          </Category>
        );
      })}
    </Article>
  );
};

EntryKeyword.propTypes = {
  color: PropTypes.string,
  keywords: PropTypes.array,
  margin: PropTypes.string,
  width: PropTypes.number,
};

EntryKeyword.defaultProps = {
  color: '#787878',
  keywords: ['テスト', 'ブログ', 'test', 'blog', 'microcms'],
  margin: '10px 7px 2px',
  width: 800,
};

export default EntryKeyword;
