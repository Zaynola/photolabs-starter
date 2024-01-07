import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import TopNavigation from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import FavBadge from './components/FavBadge';
import photos from './mocks/photos';
import topics from './mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likedPhotosCount, setLikedPhotosCount] = useState(0);
  const [showFavOnly, setShowFavOnly] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);

  const incrementLikedPhotosCount = () => {
    setLikedPhotosCount(prevCount => prevCount + 1);
  };

  const decrementLikedPhotosCount = () => {
    setLikedPhotosCount(prevCount => Math.max(0, prevCount - 1));
  };

  const toggleShowFavOnly = () => {
    setShowFavOnly(prevShowFavOnly => !prevShowFavOnly);
  };

  const updateTopic = (newTopic) => {
    setCurrentTopic(newTopic);
  };

  const resetFilters = () => {
    setShowFavOnly(false);
    setCurrentTopic(null);
  };

  return (
    <div className="App">
      <HomeRoute />
      <TopNavigation
        likedPhotosCount={likedPhotosCount}
        toggleShowFavOnly={toggleShowFavOnly}
        topics={topics}
        showFavOnly={showFavOnly}
        updateTopic={updateTopic}
        resetFilters={resetFilters}
        currentTopic={currentTopic}
      />
      <FavBadge
        isFavPhotoExist={likedPhotosCount > 0}
        likedPhotosCount={likedPhotosCount}
      />
      <PhotoList
        onLike={() => incrementLikedPhotosCount()}
        onUnlike={() => decrementLikedPhotosCount()}
      />
    </div>
  );
};

export default App;
