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
    toggleShowFavOnly,
    updateTopic,
    resetFilters,
    toggleModal,
    onCloseModal,
    onToggleFavorite,
    setLikedPhotos,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        likedPhotosCount={likedPhotosCount}
        toggleShowFavOnly={toggleShowFavOnly}
        showFavOnly={showFavOnly}
        updateTopic={updateTopic}
        resetFilters={resetFilters}
        currentTopic={currentTopic}
        onPhotoClick={toggleModal}
        isFavorite={isFavorite}
        likedPhotos={likedPhotos}
        setLikedPhotos={setLikedPhotos}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          onClose={onCloseModal}
          selectedPhoto={selectedPhoto}
          isFavorite={likedPhotos.includes(selectedPhoto.id)}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </div>
  );
};

export default App;
