// TopicFilters.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './TopicFilters.scss';

const capitalizeFirstLetter = (string) => {
  if (!string) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const TopicFilters = ({ sections, onFilter }) => {
  return (
    <div className="topic-filters">
      {sections.map((section) => (
        <button
          key={section}
          className="topic-filters__button"
          onClick={() => onFilter(section)}
        >
          {capitalizeFirstLetter(section)}
        </button>
      ))}
    </div>
  );
};

TopicFilters.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default TopicFilters;