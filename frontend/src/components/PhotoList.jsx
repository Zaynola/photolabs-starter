import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PropTypes from 'prop-types'

const PhotoList = (props) => {
  const { photos, onLike, onUnlike, likedPhotos, onPhotoClick } = props;

  if (!photos) {
    return null;
  }

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-card">
          <PhotoListItem
            id={photo.id}
            photo={photo}
            onLike={() => onLike(photo.id)}
            onUnlike={() => onUnlike(photo.id)}
            likedPhotos={likedPhotos}
            username={photo.user.username}
            imageSource={photo.urls.regular}
            profile={photo.user.profile}
            onPhotoClick={onPhotoClick}
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
  currentTopic: PropTypes.string,
  likedPhotos: PropTypes.array,
  onPhotoClick: PropTypes.func.isRequired,
};

export default PhotoList;