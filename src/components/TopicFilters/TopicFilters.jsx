import React from 'react';
import PropTypes from 'prop-types';
import './TopicFilters.scss';

const TopicFilters = ({ sections, onFilter, activeFilter }) => {
  const handleFilterClick = (section) => {
    onFilter(section);
  };

  return (
    <div className="topic-filters">
      {sections.map((section) => (
        <button
          key={section}
          className={`topic-filters__button ${
            activeFilter === section ? "active" : ""
          }`}
          onClick={() => handleFilterClick(section)}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

TopicFilters.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilter: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default TopicFilters;