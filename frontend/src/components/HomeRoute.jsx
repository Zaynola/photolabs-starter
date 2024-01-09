import React from 'react';
import { useState } from 'react';
import PhotoList from './PhotoList';
import FavBadge from './FavBadge';
import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';

const HomeRoute = (props) => {
    const {
        likedPhotosCount,
        toggleShowFavOnly,
        topics,
        showFavOnly,
        updateTopic,
        resetFilters,
        currentTopic,
        photos,
    } = props;

    const [likedPhotos, setLikedPhotos] = useState([]);

    const handleLike = (photoId) => {
        setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, photoId]);
    };

    const handleUnlike = (photoId) => {
        setLikedPhotos((prevLikedPhotos) =>
            prevLikedPhotos.filter((id) => id !== photoId)
        );
    };

    const incrementLikedPhotosCount = () => {
        setLikedPhotosCount(prevCount => prevCount + 1);
        setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, photoId]);
    };

    const decrementLikedPhotosCount = (photoId) => {
        setLikedPhotosCount(prevCount => Math.max(0, prevCount - 1));
        setLikedPhotos((prevLikedPhotos) =>
            prevLikedPhotos.filter((id) => id !== photoId)
        );
    };

    return (
        <div className="home-route">
            <TopNavigation
                likedPhotosCount={likedPhotosCount}
                toggleShowFavOnly={toggleShowFavOnly}
                topics={topics}
                showFavOnly={showFavOnly}
                updateTopic={updateTopic}
                resetFilters={resetFilters}
                currentTopic={currentTopic || ''}
            />
            <FavBadge
                isFavPhotoExist={likedPhotosCount > 0}
                likedPhotosCount={likedPhotosCount.length}
            />
            <PhotoList
                onLike={(photoId) => {
                    handleLike(photoId);
                    incrementLikedPhotosCount();
                }}
                onUnlike={(photoId) => {
                    handleUnlike(photoId);
                    decrementLikedPhotosCount();
                }}
                showFavOnly={showFavOnly}
                currentTopic={currentTopic}
                photos={photos}
            />
        </div>
    );
};


export default HomeRoute;