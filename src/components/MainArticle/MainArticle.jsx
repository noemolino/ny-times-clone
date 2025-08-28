import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import './MainArticle.scss';

const MainArticle = ({ article }) => {
  const { url, title, abstract, multimedia, byline } = article;
  const imageUrl = multimedia && multimedia.length > 0 ? multimedia[0].url : '';
  const imageCredit = multimedia && multimedia.length > 0 && multimedia[0].copyright;

  return (
    <div className="main-article">
      <div className="main-article__text">
        <h2 className="main-article__text-title">{title}</h2>
        <p className="main-article__text-abstract">{abstract}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="main-article__text-cta">
          Read full story <FaArrowRight className="main-article__text-cta-icon" />
        </a>
      </div>
      <div className="main-article__image">
        <img src={imageUrl} alt={title} className="main-article__image-img" />
        {byline && <p className="main-article__image-copy">{byline}</p>}
      </div>
    </div>
  );
};

MainArticle.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    multimedia: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        copyright: PropTypes.string,
      })
    ),
    byline: PropTypes.string,
  }).isRequired,
};

export default MainArticle;