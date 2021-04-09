import React from "react"

const TestArticle = (props) => {
  const {
    articleNumber, // article-number
    articleId, // article-div
  } = props
  return (
    <li id={articleId} className="box test-li">
      <h2 className="article-title">
        <a href="">{articleNumber} ここにタイトルが入る</a>
      </h2>
      <ul className="article-post">
        <li className="article-dateTime">投稿日時が入る</li>
        <li className="article-comment-count">コメント数</li>
      </ul>
    </li>
  )
}

export default TestArticle