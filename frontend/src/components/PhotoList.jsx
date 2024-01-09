import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PropTypes from 'prop-types'


const PhotoList = (props) => {
  const { photos, onLike, onUnlike, showFavOnly, currentTopic, likedPhotos } = props;

  if (!photos || !likedPhotos) {
    return null;
  }

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-card">
          <img src={photo.urls.regular} alt={photo.id} />
          <p>{photo.location.city}, {photo.location.country}</p>
          <button
            onClick={() =>
              likedPhotos.includes(photo.id)
                ? onUnlike(photo.id)
                : onLike(photo.id)
            }
          >
            {likedPhotos.includes(photo.id) ? 'Unlike' : 'Like'}
          </button>
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
