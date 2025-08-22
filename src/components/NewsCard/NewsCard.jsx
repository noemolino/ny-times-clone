import React from 'react';
import PropTypes from "prop-types";
import "./NewsCard.scss";

const NewsCard = ({ title, url }) => {
  return (
    <article className="news-card">
      <h3>{title}</h3>
      <a href={url} target="_blank" rel="noreferrer">
        Read more
      </a>
    </article>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NewsCard;
