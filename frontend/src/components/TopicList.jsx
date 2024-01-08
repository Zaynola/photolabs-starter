import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import PropTypes from "prop-types";


const TopicList = (props) => {
  const { topics } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          title={topic.title}
        />
      ))}
    </div>
  );
};

TopicList.propTypes = {
  topics: PropTypes.array.isRequired,
};

export default TopicList;
