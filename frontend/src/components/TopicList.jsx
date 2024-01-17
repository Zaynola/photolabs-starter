import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import PropTypes from "prop-types";
import { ActionTypes } from "../hooks/useApplicationData";


const TopicList = (props) => {
  const { topics, updateTopic } = props;
  const handleTopicClick = (topicId) => {
    dispatch({ type: ActionTypes.FETCH_PHOTOS_BY_TOPIC, payload: topicId });
    updateTopic(topicId);
  };

  return (
    <div className="top-nav-bar__topic-list">
      {topics && topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          title={topic.title}
          onClick={() => handleTopicClick(topic.id)}
        />
      ))}
    </div>
  );
};

TopicList.propTypes = {
  topics: PropTypes.array,
  updateTopic: PropTypes.func.isRequired,
  dispatch: PropTypes.func,
};

export default TopicList;
