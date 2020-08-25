import { 
    FETCH_PHOTOS,
} from './types';

export function fetchPhotos() {
    return function(dispatch) {
        dispatch({
            type: FETCH_PHOTOS,
            payload: 'fetch me some photos'
        })
    }
}


// export const signUp = (userData) => async dispatch => {
//     console.log(...userData)
//     const res = await axios.post('/api/signup', userData);
//     dispatch({ type: SET_USER, payload: res.data.user });
//   };