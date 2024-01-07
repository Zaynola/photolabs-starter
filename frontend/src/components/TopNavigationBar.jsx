import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const {
    likedPhotosCount,
    toggleShowFavOnly,
    topics,
    showFavOnly,
    updateTopic,
    resetFilters,
    currentTopic,
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={resetFilters}>
        PhotoLabs
      </span>

      <div className="top-nav-bar--links">
        <TopicList
          topics={topics}
          updateTopic={updateTopic}
          currentTopic={currentTopic}
        />
        <div
          className={showFavOnly ? "top-nav-bar-fav--active" : "top-nav-bar-fav"}>
          <FavBadge likedPhotosCount={likedPhotosCount} onClick={toggleShowFavOnly} />
        </div>
      </div>
    </div>
  );
};

TopNavigation.propTypes = {
  likedPhotosCount: PropTypes.number.isRequired,
  toggleShowFavOnly: PropTypes.func.isRequired,
  topics: PropTypes.array.isRequired,
  showFavOnly: PropTypes.bool.isRequired,
  updateTopic: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
  currentTopic: PropTypes.string.isRequired,
};

export default TopNavigation;