import React from 'react';
import { useState } from 'react';
import PhotoList from './PhotoList';
import FavBadge from './FavBadge';
import '../styles/HomeRoute.scss';
import TopNavigation from './TopNavigationBar';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

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
        displayModal,
        setDisplayModal,
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
    //console.log(displayModal)

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
                setDisplayModal={setDisplayModal}
            />
            {/* {displayModal && <PhotoDetailsModal onClose={() => setDisplayModal(false)} />} */}
        </div>
    );
};


export default HomeRoute;