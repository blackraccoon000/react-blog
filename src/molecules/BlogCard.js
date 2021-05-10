import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { DateTime } from 'luxon';
import EntryTitle from '../atoms/EntryTitle';
import EntryImg from '../atoms/EntryImg';

const CardDivision = styled.div.attrs((props) => {})`
  align-items: center;
  background-color: #fff;
  border: 1px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 14%);
  display: flex;
  flex-direction: column;
  height: 400px;
  position: relative;
  width: 314.98px;
`;

const EntryDescription = styled.p.attrs((props) => {})`
  color: #787878;
  font-weight: 300;
  word-break: break-all;
  overflow-wrap: break-word;
  overflow: hidden;
  width: 250px;
`;

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      body: '',
      createdAt: '',
      updatedAt: '',
      keyword: [],
      thumbnailUrl: '',
    };
  }
  componentDidMount() {
    const res = {
      async asyncData() {
        return await axios.get(
          'https://playwell.microcms.io/api/v1/blog/mxq-0f4nq',
          {
            headers: {
              'X-API-KEY': process.env.X_API_KEY,
            },
          }
        );
      },
    };
    res.asyncData().then((value) => {
      console.log(value.data);
      this.setState({
        id: value.data.id,
        title: value.data.title,
        body: value.data.body,
        createdAt: value.data.createdAt,
        updatedAt: value.data.updatedAt,
        keyword: value.data.keyword.split(','),
        thumbnailUrl: value.data.thumbnail.url,
        description: value.data.description,
      });
    });
  }
  render() {
    const createdDate = DateTime.fromMillis(
      Date.parse(this.state.createdAt)
    ).toFormat('yyyy-LL-dd');
    const updatedDate = DateTime.fromMillis(
      Date.parse(this.state.updatedAt)
    ).toFormat('yyyy-LL-dd');
    const date =
      createdDate === updatedDate
        ? `${createdDate}`
        : `${createdDate} (${updatedDate})`;

    return (
      <CardDivision>
        <EntryImg
          height="120px"
          src={this.state.thumbnailUrl}
          overflow="hidden"
          radius="10px 10px 0 0"
          width="100%"
        />
        <EntryTitle
          dateSize={11}
          link="#"
          title={this.state.title}
          titleSize={22}
          date={date}
          keywords={this.state.keyword}
          margin="5px"
          width={200}
        />
        <EntryDescription>{this.state.description}</EntryDescription>
      </CardDivision>
    );
  }
}

export default BlogCard;
