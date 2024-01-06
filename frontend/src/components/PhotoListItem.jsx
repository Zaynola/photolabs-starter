
import React from "react";
import "../styles/PhotoListItem.scss";
import PropTypes from "prop-types";

const PhotoListItem = ({ id, imageSource, username, profile, location }) => {
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
        </div>
      </div>
    </div>
  );
};

PhotoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  location: PropTypes.string
};

export default PhotoListItem;