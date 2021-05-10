import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import EntryImgTrans from '../atoms/EntryImgTrans';
import BlogCardContainer from './BlogCardContainer';

const CardDivision = styled.div.attrs((props) => {})`
  align-items: center;
  background-color: #fff;
  border: 1px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 3px rgb(0 0 0 / 14%);
  display: flex;
  flex-direction: column;
  height: 330px;
  margin: 30px;
  position: relative;
  width: 325px;
`;

class BlogCard2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'mxq-0f4nq',
      title: 'ブログタイトル',
      body:
        '<h3 id="h3760426492">React.Component 内部の関数を props として受け渡す。</h3><pre><code>class IndecisionApp extends React.Component {\n constructor(props) {\n  super(props)\n  this.state = {\n   options: [&quot;Thing one&quot;,&quot;Thing two&quot;,&quot;Thing three&quot;,&quot;Thing four&quot;]\n  }\n }\n\n handleDeleteOptions() {\n  this.setState(()=&gt;{\n   return {\n    options:[]\n   }\n  })\n }\n\n render() {\n  const title = &quot;Indecision&quot;\n  const subtitle = &quot;Put your life in the hands of a computer&quot;\n\n  return (\n   &lt;div&gt;\n    &lt;Header title={title} subtitle={subtitle}&#x2F;&gt;\n    &lt;Action hasOptions={this.state.options.length &gt; 0}&#x2F;&gt;\n    &lt;Options\n     options={this.state.options}\n     handleDeleteOptions={this.handleDeleteOptions}\n    &#x2F;&gt;\n    &lt;AddOption &#x2F;&gt;\n   &lt;&#x2F;div&gt;\n  )\n }\n}</code></pre><p><br><img src="https://images.microcms-assets.io/assets/577bcb7965bf4dbd951686143646657b/5b78868648964ea1865d3ead616e320b/cat_one.jpg" alt><br><code>handleDeleteOptions()</code>を<code>  setState()</code> で作成した後、<code>render()</code>から<code>handleDeleteOptions={this.handleDeleteOptions}</code>として<code>&lt;Options&#x2F;&gt;</code>へ渡す。</p><pre><code>class Options extends React.Component {\n render() {\n  return (\n   &lt;div&gt;\n    &lt;button onClick={this.props.handleDeleteOptions}&gt;Remove All&lt;&#x2F;button&gt;\n    {this.props.options.map((option,index)=&gt;&lt;Option key={index} optionText={option}&#x2F;&gt;)}\n   &lt;&#x2F;div&gt;\n  )\n }\n}</code></pre><p><br><code>Options</code>では<code> props</code>を通して情報を受け取っているため、<code>{this.props.handleDeleteOptions}</code>となる。<br>しかし、このままだと、<code>this.state.options</code> が参照できないため、<code>IndecisionApp</code>内部の<code> constructor</code>で<code>this</code>を定義してやる。<br></p><pre><code>class IndecisionApp extends React.Component {\n constructor(props) {\n  super(props)\n  this.handleDeleteOptions = this.handleDeleteOptions.bind(this) &#x2F;&#x2F;ここ\n  this.state = {\n   options: [&quot;Thing one&quot;,&quot;Thing two&quot;,&quot;Thing three&quot;,&quot;Thing four&quot;]\n  }\n }\n handleDeleteOptions() {\n  this.setState(()=&gt;{\n   return {\n    options:[]\n   }\n  })\n }\n render() {\n  const title = &quot;Indecision&quot;\n  const subtitle = &quot;Put your life in the hands of a computer&quot;\n\n  return (\n   &lt;div&gt;\n    &lt;Header title={title} subtitle={subtitle}&#x2F;&gt;\n    &lt;Action hasOptions={this.state.options.length &gt; 0}&#x2F;&gt;\n    &lt;Options\n     options={this.state.options}\n     handleDeleteOptions={this.handleDeleteOptions}\n    &#x2F;&gt;\n    &lt;AddOption &#x2F;&gt;\n   &lt;&#x2F;div&gt;\n  )\n }\n}</code></pre>',
      createdAt: '2021-05-02T07:38:52.010Z',
      updatedAt: '2021-05-08T02:50:30.478Z',
      keyword: ['テスト', 'ブログ', 'test', 'blog', 'microcms'],
      thumbnailUrl:
        'https://images.microcms-assets.io/assets/577bcb7965bf4dbd951686143646657b/f717d13f8f5a4e61a6352823252bfba6/cat_three.jpg',
      description: 'ブログテスト投稿',
    };
  }
  render() {
    return (
      <CardDivision>
        <EntryImgTrans
          src={this.state.thumbnailUrl}
          width="100%"
          radius="10px 10px 0 0"
        />
        <BlogCardContainer
          createdAt={this.state.createdAt}
          updateAt={this.state.updatedAt}
          link="#"
          title={this.state.title}
          keywords={this.state.keywords}
        />
      </CardDivision>
    );
  }
}

export default BlogCard2;
