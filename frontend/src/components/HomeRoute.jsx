import React from 'react';
import { useState } from 'react';
import PhotoList from './PhotoList';
import FavBadge from './FavBadge';
import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';

const HomeRoute = (props) => {
    const {
        toggleShowFavOnly,
        topics,
        showFavOnly,
        updateTopic,
        resetFilters,
        currentTopic,
        photos,
        onPhotoClick,
        likedPhotos,
        incrementLikedPhotosCount,
        decrementLikedPhotosCount,
    } = props;

    const handleLike = (photoId) => {
        //setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, photoId]);
        incrementLikedPhotosCount();
    };

    const handleUnlike = (photoId) => {
        //setLikedPhotos((prevLikedPhotos) =>
        // prevLikedPhotos.filter((id) => id !== photoId)
        decrementLikedPhotosCount();
    };

    return (
        <div className="home-route">
            <TopNavigation
                likedPhotos={likedPhotos.length}
                toggleShowFavOnly={toggleShowFavOnly}
                topics={topics}
                showFavOnly={showFavOnly}
                updateTopic={updateTopic}
                resetFilters={resetFilters}
                currentTopic={currentTopic || ''}
            />
            <FavBadge
                isFavPhotoExist={likedPhotos.length > 0}
                likedPhotosCount={likedPhotos.length}
            />
            <PhotoList
                onLike={handleLike}
                onUnLike={handleUnlike}
                showFavOnly={showFavOnly}
                currentTopic={currentTopic}
                photos={photos}
                likedPhotos={likedPhotos}
                onPhotoClick={onPhotoClick}
            />
        </div>
    );
};

export default HomeRoute;