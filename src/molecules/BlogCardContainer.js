import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { DateTime } from 'luxon';
import EntryKeyword from '../atoms/EntryKeyword';

const CardDivision = styled.div.attrs((props) => {})`
  align-items: center;
  border: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const DateType = styled.div.attrs((props) => {
  return {
    style: {
      fontSize: `${props.dateSize}px`,
    },
  };
})`
  color: #787878;
  font-weight: 300;
  letter-spacing: 0.2em;
  margin: 5px 0;
  text-align: center;
`;

const EntryLink = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
  };
})`
  color: #787878;
  display: inline-block;
  text-decoration: none;
  margin: 10px;
`;

const TitleArticle = styled.h4.attrs((props) => {})`
  color: #0c0c17;
  font-size: 20px;
  margin: 0;
  padding: 0 15px;
  position: relative;
`;

class BlogCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const createdDate = DateTime.fromMillis(
      Date.parse(this.props.createdAt)
    ).toFormat('yyyy-LL-dd');
    const updatedDate = DateTime.fromMillis(
      Date.parse(this.props.updatedAt)
    ).toFormat('yyyy-LL-dd');
    const date =
      createdDate === updatedDate
        ? `${createdDate}`
        : `${createdDate} (${updatedDate})`;

    return (
      <CardDivision>
        <TitleArticle>
          <EntryLink link="#">{this.props.title}</EntryLink>
        </TitleArticle>
        <EntryKeyword keywords={this.props.keywords} margin="5px" width={320} />
        <DateType dateSize={11}>{date}</DateType>
      </CardDivision>
    );
  }
}

BlogCardContainer.propTypes = {
  createdAt: PropTypes.string,
  title: PropTypes.string,
  updatedAt: PropTypes.string,
  keywords: PropTypes.string,
};

BlogCardContainer.defaultProps = {
  createdAt: '2021-05-02T07:38:52.010Z',
  title: 'ブログタイトル',
  updatedAt: '2021-05-08T02:50:30.478Z',
  keyword: ['テスト', 'ブログ', 'test', 'blog', 'microcms'],
};

export default BlogCardContainer;
