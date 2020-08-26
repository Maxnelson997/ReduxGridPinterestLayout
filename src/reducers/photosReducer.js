import  { FETCH_PHOTOS } from '../actions/types';

const INITIAL_STATE = {
    photos: [
        {
            _id: 0,
            imageURL: 'https://source.unsplash.com/collection/1538121',
            favorited: false,
        },
        {
            _id: 1,
            imageURL: 'https://source.unsplash.com/collection/219941',
            favorited: false,
        },
        {
            _id: 2,
            imageURL: 'https://source.unsplash.com/collection/1353730',
            favorited: false,
        },
        {
            _id: 3,
            imageURL: 'https://source.unsplash.com/collection/1708734',
            favorited: false,
        },
        {
            _id: 4,
            imageURL: 'https://source.unsplash.com/collection/531563',
            favorited: true,
        },
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