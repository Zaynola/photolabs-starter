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

    const handleUnlike = (photoId) => {
        setLikedPhotos((prevLikedPhotos) =>
            prevLikedPhotos.filter((id) => id !== photoId)
        );
    };

    // const incrementLikedPhotosCount = (photoId) => {
    //     setLikedPhotosCount(prevCount => prevCount + 1);
    //     setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, photoId]);
    // };

    // const decrementLikedPhotosCount = (photoId) => {
    //     setLikedPhotosCount(prevCount => Math.max(0, prevCount - 1));
    //     setLikedPhotos((prevLikedPhotos) =>
    //         prevLikedPhotos.filter((id) => id !== photoId)
    //     );
    // };

    return (
        <div className="home-route">
            <TopNavigation
                likedPhotos={likedPhotos}
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