import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, likedPhotosCount }) => {
  return (
    <div className='fav-badge'>
      {isFavPhotoExist && (
        <span className="fav-badge__count">{likedPhotosCount}</span>
      )}
      <FavIcon displayAlert={!!isFavPhotoExist} />
    </div>
  )
};

export default FavBadge;