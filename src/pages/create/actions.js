import { BLOG } from './../../services';

export const FETCH_CREATE_BLOG = {
    DEFAULT: 'FETCH_CREATE_BLOG_DEFAULT',
    RESET: 'FETCH_CREATE_BLOG_DEFAULT',
    CREATE: 'FETCH_CREATE_BLOG_CREATE',
    SUCCESS: 'FETCH_CREATE_BLOG_SUCCESS',
    FAILURE: 'FETCH_CREATE_BLOG_FAILURE',
}

export const defaultCreateBlog = () => {
    return (dispatch, getState) => {
        dispatch(dispatcher.defaultCreateBlog());
    }
}

export const resetCreateBlog = () => {
    return (dispatch, getState) => {
        dispatch(dispatcher.resetDetailBlog());
    }
}

export const createBlog = (params) => {
    return (dispatch, getState) => {
        dispatch(dispatcher.createBlog(params));
        BLOG.createBlog(params)
            .then((response) => {
                dispatch(dispatcher.getBlogSuccess('Success'));
            })
            .catch((error) => {
                dispatch(dispatcher.getBlogFailure('Error'));
            });
    }
}

const dispatcher = {
    defaultCreateBlog: () => ({type: FETCH_CREATE_BLOG.DEFAULT}),
    resetCreateBlog: () => ({type: FETCH_CREATE_BLOG.RESET}),
  
    createBlog: () => ({type: FETCH_CREATE_BLOG.GET}),
    createBlogSuccess: (message) => ({type: FETCH_CREATE_BLOG.SUCCESS, message}),
    createBlogFailure: (message) => ({type: FETCH_CREATE_BLOG.FAILURE, message}),
}