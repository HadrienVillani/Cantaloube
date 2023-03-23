import React, { useState } from 'react';
import { articles } from '../data/articles';

function Article(props) {
  const [currentArticle] = useState(articles);
  const tableau = [0, 1, 2, 3, 4, 5];
  return (
    <div>
      {currentArticle.map((article) => (
        <article>
          <h1>{article.title}</h1>
          <p>{article.text}</p>
        </article>
      ))}
      {tableau.map((nombre) => (
        <p>{nombre}</p>
      ))}
    </div>
  );
}

export default Article;
