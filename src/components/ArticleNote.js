import React from 'react';
import { DateTime } from 'luxon';

const ArticleNote = (props) => {
  return (
    <article className="article-item">
      <figure className="article-item__photo">
        {props.link ? (
          <img className="article-item__img" src={props.link} alt="dog" />
        ) : (
          <div className="article-item__imgDiv">No Image</div>
        )}
      </figure>
      <div className="article-item__box">
        <h3 className="article-item__title">{props.title}</h3>
        <p className="article-item__text">{props.note}</p>
        <p className="article-item__date">
          {DateTime.fromMillis(props.createdAt).toFormat('yyyy LL dd')}
        </p>
      </div>
    </article>
  );
};

export default ArticleNote;
