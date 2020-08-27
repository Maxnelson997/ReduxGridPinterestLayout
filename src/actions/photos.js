import { 
    FETCH_PHOTOS,
    UPDATE_FAVORITE_STATUS_WITH_ID
} from './types';

export function fetchPhotos() {
    return function(dispatch) {
        dispatch({
            type: FETCH_PHOTOS,
            payload: 'fetch me some photos'
        })
    }
}

export function updateFavoriteStatusWithID(_id) {
    return function(dispatch) {
        dispatch({
            type: UPDATE_FAVORITE_STATUS_WITH_ID,
            payload: _id
        })
    }
}