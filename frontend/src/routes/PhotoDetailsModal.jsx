import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, selectedPhoto }) => {
  if (!selectedPhoto) {
    return null;
  }

  const { id, imageSource, username, profile, location } = selectedPhoto;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <img
          className="photo-details-modal__image"
          src={imageSource}
          alt={`Photo by ${username}`}
        />
        <div className="photo-details-modal__info">
          <p>{username}</p>
          {location && (
            <p>
              {location.city}, {location.country}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;