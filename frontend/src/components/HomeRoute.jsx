import React from 'react';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';
import TopicList from './TopicList';

const HomeRoute = (props) => {
    const {
        topics,
        showFavOnly,
        updateTopic,
        resetFilters,
        currentTopic,
        photoData,
        topicData,
        onPhotoClick,
        likedPhotos,
        incrementLikedPhotosCount,
        decrementLikedPhotosCount,
        fetchDataByTopic,
    } = props;

    const handleLike = (photoId) => {
        incrementLikedPhotosCount(photoId);
    };

    const handleUnlike = (photoId) => {
        decrementLikedPhotosCount(photoId);
    };

    return (
        <div className="home-route">
            <TopNavigation
                likedPhotos={likedPhotos.length}
                topics={topics}
                showFavOnly={showFavOnly}
                updateTopic={updateTopic}
                resetFilters={resetFilters}
                currentTopic={currentTopic || ''}
                fetchDataByTopic={fetchDataByTopic}
            />

            <PhotoList
                onLike={handleLike}
                onUnlike={handleUnlike}
                showFavOnly={showFavOnly}
                currentTopic={currentTopic}
                photos={photoData}
                likedPhotos={likedPhotos}
                onPhotoClick={onPhotoClick}
            />
            <TopicList topics={topicData} updateTopic={updateTopic} />
        </div>
    );
};

export default HomeRoute;