import React from "react";
import "../styles/TopicListItem.scss";
import PropTypes from "prop-types";

const TopicListItem = ({ id, slug, title, onClick }) => {
  return (
    <div className="topic-list__item" key={id} onClick={() => onClick(id)}>
      <span>{title}</span>
    </div>
  );
};

TopicListItem.propTypes = {
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TopicListItem;

// onClick={onClick}