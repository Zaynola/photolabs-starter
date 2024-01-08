import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PropTypes from 'prop-types'


const PhotoList = (props) => {
  const { photos, onLike, onUnlike, showFavOnly, currentTopic } = props;
  if (!photos) {
    return null;
  }

  const incrementLikedPhotosCount = (photoId) => {
    const isLiked = likedPhotos.includes(photoId);
    if (!isLiked) {
      onLike(photoId);
    }
  };

  const decrementLikedPhotosCount = (photoId) => {
    const isLiked = likedPhotos.includes(photoId);
    if (isLiked) {
      onUnlike(photoId);
    }
  };

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photo-card">
          <img src={photo.urls.regular} alt={photo.id} />
          <p>{photo.location.city}, {photo.location.country}</p>
          <button onClick={() => onLike(photo.id)}>Like</button>
          <button onClick={() => onUnlike(photo.id)}>Unlike</button>
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
};

export default PhotoList;
