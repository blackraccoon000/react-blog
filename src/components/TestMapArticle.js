import React from "react"
import TestArticle from "./TestArticle"

const TestMapArticle = () => {
  const arr = [...Array(30)].map((_, i) => i);
  return (
    <div className="test-body">
      <ul className="test-ul">
        {
          arr.map((_,i) => {
            return (
              <TestArticle
                key={`article-key-${i}`}
                articleNumber={i}
                articleId={`article-id-${i}`}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

export default TestMapArticle