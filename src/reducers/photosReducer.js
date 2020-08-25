import  { FETCH_PHOTOS } from '../actions/types';

const INITIAL_STATE = {
    photos: [
        'https://source.unsplash.com/collection/1538121',
        'https://source.unsplash.com/collection/219941',
        'https://source.unsplash.com/collection/1353730',
        'https://source.unsplash.com/collection/1708734',
        'https://source.unsplash.com/collection/531563',
    ]
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PHOTOS:
            alert(action.payload)
            return {
                ...state,
            }
        default: 
            return state;
    }
}