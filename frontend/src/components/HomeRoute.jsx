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
    } = props;

    const [likedPhotos, setLikedPhotos] = useState([]);

    const handleLike = (photoId) => {
        setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, photoId]);
    };
    console.log({ likedPhotos })

    const handleUnlike = (photoId) => {
        setLikedPhotos((prevLikedPhotos) =>
            prevLikedPhotos.filter((id) => id !== photoId)
        );
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
                onUnlike={handleUnlike}
                showFavOnly={showFavOnly}
                currentTopic={currentTopic}
                photos={photos}
                likedPhotos={likedPhotos}
            />
        </div>
    );
};


export default HomeRoute;