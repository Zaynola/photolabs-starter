import { useReducer, useEffect } from 'react';
//import photos from '../mocks/photos';
export const ActionTypes = {
    INCREMENT_LIKED_PHOTOS_COUNT: 'INCREMENT_LIKED_PHOTOS_COUNT',
    DECREMENT_LIKED_PHOTOS_COUNT: 'DECREMENT_LIKED_PHOTOS_COUNT',
    TOGGLE_SHOW_FAV_ONLY: 'TOGGLE_SHOW_FAV_ONLY',
    UPDATE_TOPIC: 'UPDATE_TOPIC',
    RESET_FILTERS: 'RESET_FILTERS',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
    FETCH_PHOTO_DATA: 'FETCH_PHOTO_DATA',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
};
const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_LIKED_PHOTOS_COUNT:
            return { ...state, likedPhotosCount: state.likedPhotosCount + 1 };
        case ActionTypes.DECREMENT_LIKED_PHOTOS_COUNT:
            return { ...state, likedPhotosCount: Math.max(0, state.likedPhotosCount - 1) };
        case ActionTypes.TOGGLE_SHOW_FAV_ONLY:
            return { ...state, showFavOnly: !state.showFavOnly };
        case ActionTypes.UPDATE_TOPIC:
            return { ...state, currentTopic: action.payload };
        case ActionTypes.RESET_FILTERS:
            return { ...state, showFavOnly: false, currentTopic: null };
        case ActionTypes.TOGGLE_MODAL:
            const target = state.photoData.find(photo => photo.id === action.payload);
            return { ...state, selectedPhoto: target };
        case ActionTypes.CLOSE_MODAL:
            return { ...state, selectedPhoto: null };
        case ActionTypes.TOGGLE_FAVORITE:
            const isFavorite = state.likedPhotos.includes(state.selectedPhoto.id);
            const updatedLikedPhotos = isFavorite
                ? state.likedPhotos.filter((photoId) => photoId !== state.selectedPhoto.id)
                : [...state.likedPhotos, state.selectedPhoto.id];
            return { ...state, likedPhotos: updatedLikedPhotos, isFavorite: !isFavorite };
        case ActionTypes.SET_PHOTO_DATA:
            return { ...state, photoData: action.payload };

        case ActionTypes.FETCH_PHOTOS_BY_TOPIC:
            const topicId = action.payload;
            fetch(`/api/topics/photos/${topicId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    dispatch({ type: ActionTypes.SET_PHOTO_DATA, payload: data });
                })
                .catch(error => {
                    console.error(`Error fetching photos for topic ${topicId}:`, error);
                });
            return state;

        default:
            return state;
    }
};
const initialState = {
    likedPhotosCount: 0,
    showFavOnly: false,
    currentTopic: null,
    selectedPhoto: null,
    isFavorite: false,
    likedPhotos: [],
    photoData: [],
    topicData: [],
};
const useApplicationData = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { likedPhotosCount, showFavOnly, currentTopic, selectedPhoto, isFavorite, likedPhotos, photoData } = state;
    useEffect(() => {
        const fetchData = () => {
            // Fetch photo data
            fetch('/api/photos')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    //console.log('Response from /api/photos:', data);
                    dispatch({ type: ActionTypes.SET_PHOTO_DATA, payload: data });
                })
                .catch(error => {
                    console.error('Error fetching data from /api/photos:', error);
                });
            // Fetch topic data
            fetch('/api/topics')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    dispatch({ type: ActionTypes.SET_TOPIC_DATA, payload: data });
                })
                .catch(error => {
                    console.error('Error fetching data from /api/topics:', error);
                });
        };
        fetchData();
    }, []);
    const {
        incrementLikedPhotosCount,
        decrementLikedPhotosCount,
        toggleShowFavOnly,
        updateTopic,
        resetFilters,
        toggleModal,
        closeModal,
        toggleFavorite,
    } = {
        incrementLikedPhotosCount: () => dispatch({ type: ActionTypes.INCREMENT_LIKED_PHOTOS_COUNT }),
        decrementLikedPhotosCount: () => dispatch({ type: ActionTypes.DECREMENT_LIKED_PHOTOS_COUNT }),
        toggleShowFavOnly: () => dispatch({ type: ActionTypes.TOGGLE_SHOW_FAV_ONLY }),
        updateTopic: (newTopic) => dispatch({ type: ActionTypes.UPDATE_TOPIC, payload: newTopic }),
        resetFilters: () => dispatch({ type: ActionTypes.RESET_FILTERS }),
        toggleModal: (id) => dispatch({ type: ActionTypes.TOGGLE_MODAL, payload: id }),
        closeModal: () => dispatch({ type: ActionTypes.CLOSE_MODAL }),
        toggleFavorite: () => dispatch({ type: ActionTypes.TOGGLE_FAVORITE }),
    };
    return { likedPhotosCount, showFavOnly, currentTopic, selectedPhoto, isFavorite, likedPhotos, photoData, incrementLikedPhotosCount, decrementLikedPhotosCount, toggleShowFavOnly, updateTopic, resetFilters, toggleModal, closeModal, toggleFavorite };
};
export default useApplicationData;