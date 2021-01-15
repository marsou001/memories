import { FETCH_POSTS, CREATE, UPDATE, DELETE, LIKE } from './types';
import * as api from '../api';

export const getPosts = () => (
    async dispatch => {
        try {
            const { data } = await api.fetchPosts();
            dispatch({
                type: FETCH_POSTS,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
);

export const createPost = post => (
    async dispatch => {
        try { 
            const { data } = await api.createPost(post);            
            dispatch({
                type: CREATE,
                payload: data
            });
        } catch (error) {
            console.error(error);
        }
    }
)

export const updatePost = (id, post) => (
    async dispatch => {
        try {
            const { data } = await api.updatePost(id, post);            
            dispatch ({
                type: UPDATE,
                payload: data
            });
        } catch (error) {
            console.error(error);
        }
    }
)

export const deletePost = id => (
    async dispatch => {
        try {
            await api.deletePost(id);
            console.log()
            dispatch ({
                type: DELETE,
                payload: id
            });
        } catch (error) {
            console.error(error)
        }
    }
)

export const likePost = id => (
    async dispatch => {
        try {
            const { data } = await api.likePost(id);
            dispatch ({
                type: LIKE,
                payload: data
            });
        } catch (error) {
            console.error(error)
        }
    }
)