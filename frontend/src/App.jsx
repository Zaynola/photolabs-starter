import React from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    likedPhotosCount,
    showFavOnly,
    currentTopic,
    selectedPhoto,
    isFavorite,
    likedPhotos,
    incrementLikedPhotosCount,
    decrementLikedPhotosCount,
    updateTopic,
    resetFilters,
    toggleModal,
    closeModal,
    toggleFavorite,
    photoData,
    topicData,
    fetchDataByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        photoData={photoData}
        topicData={topicData}
        likedPhotosCount={likedPhotosCount}
        showFavOnly={showFavOnly}
        updateTopic={updateTopic}
        resetFilters={resetFilters}
        currentTopic={currentTopic}
        onPhotoClick={toggleModal}
        isFavorite={isFavorite}
        likedPhotos={likedPhotos}
        incrementLikedPhotosCount={incrementLikedPhotosCount}
        decrementLikedPhotosCount={decrementLikedPhotosCount}
        fetchDataByTopic={fetchDataByTopic}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          onClose={closeModal}
          selectedPhoto={selectedPhoto}
          isFavorite={likedPhotos.includes(selectedPhoto.id)}
          onToggleFavorite={toggleFavorite}
          onLike={incrementLikedPhotosCount}
          onUnlike={decrementLikedPhotosCount}
          likedPhotos={likedPhotos}
        />
      )}
    </div>
  );
};

export default App;