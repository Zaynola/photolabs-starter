import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, selectedPhoto, similarPhotos, isFavorite, onToggleFavorite }) => {
  const { imageSource, username, location, profile } = selectedPhoto;


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Main Image Section */}
      <div className="photo-details-modal__content">
        <img
          className="photo-details-modal__image"
          src={selectedPhoto.urls.full}
          alt={`Photo by ${selectedPhoto.user.username}`}
        />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={selectedPhoto.urls}
            alt={`${selectedPhoto.user.username}'s profile`}
          />
          <div className="photo-details-modal__info">
            <p>{selectedPhoto.user.username}</p>
            {location && (
              <p className="photo-details-modal__photographer-location">
                {location.city}, {location.country}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Similar Photos Section */}
      <div className="photo-details-modal__images">
        <h3>Similar Photos</h3>
        <div className="photo-details-modal__images-grid">
          {Object.values(selectedPhoto.similar_photos).map((photo) => (
            <img
              key={photo.id}
              className="photo-details-modal__thumbnail"
              src={photo.urls.regular}
              alt={`Similar Photo by ${photo.user.username}`}
            />
          ))}
        </div>
      </div>

      {/* Favorite Icon */}
      <div className="photo-details-modal__favorite">
        <button onClick={onToggleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};
export default PhotoDetailsModal;