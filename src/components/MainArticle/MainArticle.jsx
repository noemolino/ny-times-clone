import React from "react";
import PropTypes from "prop-types";
import "./MainArticle.scss";

const MainArticle = ({ article }) => {
  if (!article) return null;

  const imageUrl = article.multimedia?.[0]?.url;
  const imageCaption = article.multimedia?.[0]?.caption;
  const imageCopyright = article.multimedia?.[0]?.copyright;

  return (
    <section className="main-article">
      <div className="main-article__text">
        <h2>{article.title}</h2>
        <p>{article.abstract}</p>
        <a href={article.url} target="_blank" rel="noreferrer">
          Read full story
        </a>
      </div>

      <div className="main-article__image">
        {imageUrl && (
          <img
            className="main-article__image-img"
            src={imageUrl}
            alt={imageCaption || article.title}
          />
        )}
        <p className="main-article__image-copy">{imageCopyright}</p>
      </div>
    </section>
  );
};

MainArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    multimedia: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        copyright: PropTypes.string.isRequired,
      })
    ),
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainArticle;
