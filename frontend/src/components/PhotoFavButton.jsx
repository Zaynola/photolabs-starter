import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { isFav, onFavClick, onUnFavClick } = props;

  const handleIconClick = () => {
    console.log('Icon clicked!');
    if (isFav) {
      console.log('Unfavoriting...');
      onUnFavClick();
    } else {
      console.log('Favoriting...');
      onFavClick();
    }
  }

  const buttonClasses = classNames('photo-list__fav-icon', { 'active': isFav });

  return (
    <div className={buttonClasses} onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={isFav ? '#C80000' : '#EEEEEE'} />
      </div>
    </div>
  );
}

export default PhotoFavButton;