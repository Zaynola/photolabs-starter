
import React from "react";
import "../styles/PhotoListItem.scss";
import PropTypes from "prop-types";

const PhotoListItem = ({ id, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item">
      <img
        className="photo-list-item-image"
        src={imageSource}
        alt={`Photo by ${username}`}
      />
      <div className="photo-list-item-details">
        <img
          className="photo-list-item-profile"
          src={profile}
          alt={`${username}'s profile`}
        />
        <p className="photo-list-item-username">{username}</p>
      </div>
    </div>
  );
};

PhotoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
};

export default PhotoListItem;