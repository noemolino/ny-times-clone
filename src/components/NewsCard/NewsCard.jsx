import React from 'react';
import PropTypes from "prop-types";
import { FaArrowRight } from 'react-icons/fa';
import "./NewsCard.scss";

const NewsCard = ({ title, url }) => {
  return (
    <article className="news-card">
      <h3 className="news-card__title">{title}</h3>
      <a href={url} target="_blank" rel="noreferrer" className="news-card__cta">
        Read more <FaArrowRight className="news-card__cta-icon" />
      </a>
    </article>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NewsCard;
