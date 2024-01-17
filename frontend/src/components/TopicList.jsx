import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import PropTypes from "prop-types";


const TopicList = (props) => {
  const { topics, updateTopic } = props;
  const handleTopicClick = (topicName) => {
    updateTopic(topicName);
  };

  return (
    <div className="top-nav-bar__topic-list">
      {topics && topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          title={topic.title}
          onClick={() => handleTopicClick(topic.title)}
        />
      ))}
    </div>
  );
};

TopicList.propTypes = {
  topics: PropTypes.array,
  updateTopic: PropTypes.func.isRequired,
};

export default TopicList;
