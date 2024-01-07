import React from 'react';
import { useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import FavBadge from './FavBadge';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
    const [likedPhotosCount, setLikedPhotosCount] = useState(0);
    const [showFavOnly, setShowFavOnly] = useState(false);
    const [topics, setTopics] = useState([
        { id: '1', title: 'Nature' },
        { id: '2', title: 'Travel' },
    ]);
    const [currentTopic, setCurrentTopic] = useState('');

    const incrementLikedPhotosCount = () => {
        setLikedPhotosCount(prevCount => prevCount + 1);
    };

    const decrementLikedPhotosCount = () => {
        setLikedPhotosCount(prevCount => Math.max(0, prevCount - 1));
    };

    const toggleShowFavOnly = () => {
        setShowFavOnly((prevShowFavOnly) => !prevShowFavOnly);
    };

    const updateTopic = (newTopic) => {
        setCurrentTopic(newTopic);
    };

    const resetFilters = () => {
        setShowFavOnly(false);
        setCurrentTopic('');
    };

    return (
        <div className="home-route">
            <TopNavigationBar
                likedPhotosCount={likedPhotosCount}
                toggleShowFavOnly={toggleShowFavOnly}
                topics={topics}
                showFavOnly={showFavOnly}
                updateTopic={updateTopic}
                resetFilters={resetFilters}
                currentTopic={currentTopic}
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
            />
        </div>
    );
};

export default HomeRoute;