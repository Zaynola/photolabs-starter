import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PropTypes from 'prop-types'


const PhotoList = (props) => {
  const { photos, onLike, onUnlike, showFavOnly, currentTopic, likedPhotos } = props;

  if (!photos) {
    return null;
  }

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-card">
          <PhotoListItem
            photo={photo}
            onLike={() => onLike(photo.id)}
            onUnlike={() => onUnlike(photo.id)}
            showFavOnly={showFavOnly}
            currentTopic={currentTopic}
            likedPhotos={likedPhotos} // Pass likedPhotos as a prop
          />
        </div>
      ))}
    </div>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array,
  onLike: PropTypes.func.isRequired,
  onUnlike: PropTypes.func.isRequired,
  showFavOnly: PropTypes.bool.isRequired,
  currentTopic: PropTypes.string,
  likedPhotos: PropTypes.array,
};

export default PhotoList;
