import React from "react";
import "../styles/TopicListItem.scss";
import PropTypes from "prop-types";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = ({ id, slug, title }) => {
  return (
    <div className="topic-list__item" key={id}>
      <span>{title}</span>
    </div>
  );
};

TopicListItem.propTypes = {
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopicListItem;
