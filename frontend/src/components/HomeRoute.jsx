import React from 'react';
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

    const incrementLikedPhotosCount = () => {
        setLikedPhotosCount(prevCount => prevCount + 1);
    };

    const decrementLikedPhotosCount = () => {
        setLikedPhotosCount(prevCount => Math.max(0, prevCount - 1));
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
                likedPhotosCount={likedPhotosCount}
            />
            <PhotoList
                onLike={() => incrementLikedPhotosCount()}
                onUnlike={() => decrementLikedPhotosCount()}
                showFavOnly={showFavOnly}
                currentTopic={currentTopic}
                photos={photos}
            />
        </div>
    );
};

export default HomeRoute;