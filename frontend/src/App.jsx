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
  //const [displayModal, setDisplayModal] = useState(false);
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
    // console.log("toggglemodal")
    setSelectedPhoto(target);
    setIsFavorite(likedPhotos.includes(id));
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
      // displayModal={displayModal}
      // setDisplayModal={setDisplayModal}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          onClose={() => {
            toggleModal(selectedPhoto.id);
          }}
          selectedPhoto={selectedPhoto}
          isFavorite={likedPhotos.includes(selectedPhoto.id)}
          onToggleFavorite={() => {
            setIsFavorite((prev) => !prev);
            setLikedPhotos((prevLikedPhotos) => {
              if (prev) {
                // Remove from likedPhotos
                return prevLikedPhotos.filter((photoId) => photoId !== selectedPhoto.id);
              } else {
                // Add to likedPhotos
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