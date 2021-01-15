import { FETCH_POSTS, CREATE, UPDATE, DELETE, LIKE } from '../actions/types';

export default function actions(posts = [], action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
        case LIKE:
            return posts.map(post => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return posts.filter(post => post._id !== action.payload);
        default:
            return posts;            
    }
}