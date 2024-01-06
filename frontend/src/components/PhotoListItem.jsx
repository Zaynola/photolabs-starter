import React from "react";
import "../styles/PhotoListItem.scss";
import PropTypes from "prop-types";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ id, imageSource, username, profile, location }) => {
  const [isFav, setIsFav] = React.useState(false);

  const handleFavClick = () => {
    setIsFav(true);
  };

  const handleUnFavClick = () => {
    setIsFav(false);
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
        isFav={isFav}
        onFavClick={handleFavClick}
        onUnFavClick={handleUnFavClick}
      />
    </div>
  );
};

PhotoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
};

export default PhotoListItem;