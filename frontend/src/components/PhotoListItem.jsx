import React from "react";
import "../styles/PhotoListItem.scss";
import PropTypes from "prop-types";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ id, imageSource, username, profile, location, onLike, onUnLike, likedPhotos }) => {
  const isFavInitially = likedPhotos.includes(id);

  const toggleFav = () => {
    if (isFavInitially) {
      onUnLike(id);
    } else {
      onLike(id);
    }
  };

  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo by ${username}`}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`${username}'s profile`}
        />
        <div className="photo-list__user-info">
          <p className="photo-list__user-username">{username}</p>
          {location && location.city && location.country && (
            <p className="photo-list__user-location">
              {location.city}, {location.country}
            </p>
          )}
        </div>
      </div>
      <PhotoFavButton
        isFav={isFavInitially}
        onFavClick={() => (isFavInitially ? onUnLike(id) : onLike(id))}
        onUnFavClick={() => (isFavInitially ? onUnLike(id) : onLike(id))}
      />
    </div>
  );
};


PhotoListItem.propTypes = {
  id: PropTypes.string,
  imageSource: PropTypes.string,
  username: PropTypes.string,
  profile: PropTypes.string,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
  onLike: PropTypes.func.isRequired,
  onUnlike: PropTypes.func.isRequired,
  likedPhotos: PropTypes.array.isRequired,
};

export default PhotoListItem;