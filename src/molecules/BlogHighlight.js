import React from 'react';
import cheerio from 'cheerio';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import axios from 'axios';
import 'highlight.js/styles/atelier-cave-dark.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

class BlogHighlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
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
      this.setState({ body: value.data.body });
    });
  }
  render() {
    const $ = cheerio.load(this.state.body);
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    });
    return <div dangerouslySetInnerHTML={{ __html: $.html() }} />;
  }
}

export default BlogHighlight;
