import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import cheerio from 'cheerio';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atelier-cave-dark.css';
import { DateTime } from 'luxon';
import EntryTitle from '../atoms/EntryTitle';
import EntryImg from '../atoms/EntryImg';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

const Article = styled.div.attrs((props) => {})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
`;

const EntryBody = styled.div.attrs((props) => {})`
  & h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 15px auto;
    color: #787878;
  }
  & pre {
    background-color: #25292f;
    border: 2px solid #25292f;
    border-radius: 10px;
    box-sizing: border-box;
    color: #fff;
    padding: 15px;
    width: 850px;

    & code {
      white-space: pre-wrap;
    }
  }
  & img {
    border: 1px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    width: 850px;
  }
`;

class BlogPrev extends React.Component {
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
    // download
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
      this.setState({
        id: value.data.id,
        title: value.data.title,
        body: value.data.body,
        createdAt: value.data.createdAt,
        updatedAt: value.data.updatedAt,
        keyword: value.data.keyword.split(','),
        thumbnailUrl: value.data.thumbnail.url,
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
    const $ = cheerio.load(this.state.body);
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    });
    return (
      <Article>
        <EntryTitle
          link="#"
          title={this.state.title}
          date={date}
          keywords={this.state.keyword}
        />
        <EntryImg src={this.state.thumbnailUrl} radius="10px" />
        <EntryBody dangerouslySetInnerHTML={{ __html: $.html() }} />
      </Article>
    );
  }
}

export default BlogPrev;
