import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [likedPhotosCount, setLikedPhotosCount] = useState(0);
  const [showFavOnly, setShowFavOnly] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [likedPhotos, setLikedPhotos] = useState([]);

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

  const toggleModal = (id) => {
    const target = photos.find(photo => photo.id === id);
    setSelectedPhoto(target);
  };

  const onCloseModal = () => {
    setSelectedPhoto(null);
  };

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
          onToggleFavorite={() => {
            setLikedPhotos((prevLikedPhotos) => {
              if (likedPhotos.includes(selectedPhoto.id)) {
                return prevLikedPhotos.filter((photoId) => photoId !== selectedPhoto.id);
              } else {
                return [...prevLikedPhotos, selectedPhoto.id];
              }
            });
          }}
        />
      )}
    </div>
  );
};

export default App;
