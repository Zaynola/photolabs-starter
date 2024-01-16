import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, selectedPhoto }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {selectedPhoto ? (
        <div className="photo-details-modal__content">
          <img
            className="photo-details-modal__image"
            src={selectedPhoto.imageSource}
            alt={`Photo by ${selectedPhoto.username}`}
          />
          <div className="photo-details-modal__info">
            <p>{selectedPhoto.username}</p>
            {selectedPhoto.location && (
              <p>
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </p>
            )}
          </div>
        </div>
      ) : (
        <span></span>
      )}
      </div>
  );
};

export default PhotoDetailsModal;