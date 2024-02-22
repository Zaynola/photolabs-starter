import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const {
    likedPhotos,
    topics,
    updateTopic,
    resetFilters,
    currentTopic,
    fetchDataByTopic,
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={resetFilters}>
        PhotoLabs
      </span>

      <TopicList
        topics={topics}
        updateTopic={updateTopic}
        currentTopic={currentTopic}
        fetchDataByTopic={fetchDataByTopic}
      />

      <FavBadge likedPhotosCount={likedPhotos} isFavPhotoExist={likedPhotos > 0} />
    </div>
  );
};

TopNavigation.propTypes = {
  likedPhotosCount: PropTypes.number,
  topics: PropTypes.array.isRequired,
  updateTopic: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
  currentTopic: PropTypes.string,
};

export default TopNavigation;