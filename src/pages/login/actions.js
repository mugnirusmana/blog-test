import { BLOG } from './../../services';

export const FETCH_BLOG = {
    DEFAULT: 'FETCH_BLOG_DEFAULT',
    RESET: 'FETCH_BLOG_RESET',
}

export const FETCH_GET_BLOG = {
    GET: 'FETCH_GET_BLOG_GET',
    SUCCESS: 'FETCH_GET_BLOG_SUCCESS',
    FAILURE: 'FETCH_GET_BLOG_FAILURE',
}

export const FETCH_DETAIL_BLOG = {
    GET: 'FETCH_REMOVE_BLOG_GET',
    SUCCESS: 'FETCH_REMOVE_BLOG_SUCCESS',
    FAILURE: 'FETCH_REMOVE_BLOG_FAILURE',
}

export const FETCH_REMOVE_BLOG = {
    GET: 'FETCH_REMOVE_BLOG_GET',
    SUCCESS: 'FETCH_REMOVE_BLOG_SUCCESS',
    FAILURE: 'FETCH_REMOVE_BLOG_FAILURE',
}

export const defaultBlog = () => {
    return (dispatch, getState) => {
        dispatch(dispatcher.defaultBlog());
    }
}

export const resetBlog = () => {
    return (dispatch, getState) => {
        dispatch(dispatcher.resetBlog());
    }
}

export const getBlog = () => {
    return (dispatch, getState) => {
        dispatch(dispatcher.getBlog());
        BLOG.getBlog()
            .then((response) => {
                dispatch(dispatcher.getBlogSuccess(response.data, 'Success'));
            })
            .catch((error) => {
                dispatch(dispatcher.getBlogFailure('Error'));
            });
    }
}

export const removeBlog = (id) => {
    return (dispatch, getState) => {
        dispatch(dispatcher.removeBlog(id));
        BLOG.removeBlog(id)
            .then((response) => {
                dispatch(dispatcher.removeBlogSuccess(response.data, 'Success'));
            })
            .catch((error) => {
                dispatch(dispatcher.removeBlogFailure('Error'));
            });
    }
}

const dispatcher = {
    defaultBlog: () => ({type: FETCH_BLOG.DEFAULT}),
    resetBlog: () => ({type: FETCH_BLOG.RESET}),
  
    getBlog: () => ({type: FETCH_GET_BLOG.GET}),
    getBlogSuccess: (params) => ({type: FETCH_GET_BLOG.SUCCESS, params}),
    getBlogFailure: (message) => ({type: FETCH_GET_BLOG.FAILURE, message}),
  
    removeBlog: () => ({type: FETCH_REMOVE_BLOG.GET}),
    removeBlogSuccess: (message) => ({type: FETCH_REMOVE_BLOG.SUCCESS, message}),
    removeBlogFailure: (message) => ({type: FETCH_REMOVE_BLOG.FAILURE, message}),
}