import React from "react"
import { DateTime } from "luxon"

const ArticleNote = (props) => {
  return (<div className="article-item">
    <figure className="article-item__photo">
      <img className="article-item__img" src={props.img} alt="dog"
        // onClick={(e)=>{
        //   e.preventDefault()
        //   console.log("click image: ",props.img)
        // }
      />
    </figure>
    <div className="article-item__box">
      <h3 className="article-item__title">{props.title}</h3>
      <p className="article-item__text">{props.note}</p>
      <p className="article-item__date">{DateTime.fromMillis(props.createdAt).toFormat('yyyy LL dd')}</p>
    </div>
  </div>)
}

export default ArticleNote