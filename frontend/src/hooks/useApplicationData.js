import { useState } from 'react';
import photos from '../mocks/photos';

const useApplicationData = () => {
    const [likedPhotosCount, setLikedPhotosCount] = useState(0);
    const [showFavOnly, setShowFavOnly] = useState(false);
    const [currentTopic, setCurrentTopic] = useState(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [likedPhotos, setLikedPhotos] = useState([]);

    const incrementLikedPhotosCount = () => {
        setLikedPhotosCount(prevCount => prevCount + 1);
    };

    const decrementLikedPhotosCount = () => {
        setLikedPhotosCount(prevCount => Math.max(0, prevCount - 1));
    };

    const toggleShowFavOnly = () => {
        setShowFavOnly(prevShowFavOnly => !prevShowFavOnly);
    };

    const updateTopic = (newTopic) => {
        setCurrentTopic(newTopic);
    };

    const resetFilters = () => {
        setShowFavOnly(false);
        setCurrentTopic(null);
    };

    const toggleModal = (id) => {
        const target = photos.find(photo => photo.id === id);
        setSelectedPhoto(target);
    };

    const onCloseModal = () => {
        setSelectedPhoto(null);
    };

    const onToggleFavorite = () => {
        setLikedPhotos((prevLikedPhotos) => {
            if (likedPhotos.includes(selectedPhoto.id)) {
                return prevLikedPhotos.filter((photoId) => photoId !== selectedPhoto.id);
            } else {
                return [...prevLikedPhotos, selectedPhoto.id];
            }
        });
    };

    return {
        likedPhotosCount,
        showFavOnly,
        currentTopic,
        selectedPhoto,
        isFavorite,
        likedPhotos,
        incrementLikedPhotosCount,
        decrementLikedPhotosCount,
        toggleShowFavOnly,
        updateTopic,
        resetFilters,
        toggleModal,
        onCloseModal,
        onToggleFavorite,
        setLikedPhotos,
    };
};

export default useApplicationData;