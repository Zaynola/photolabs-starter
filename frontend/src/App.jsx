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
    const target = photos.find(photo => photo.id === id)
    // console.log("toggglemodal")
    setSelectedPhoto(target);
    // console.log(displayModal)
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
      // displayModal={displayModal}
      // setDisplayModal={setDisplayModal}
      />
      {selectedPhoto && <PhotoDetailsModal onClose={toggleModal}
        selectedPhoto={selectedPhoto}
      />}



    </div>
  );
};

export default App;