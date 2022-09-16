import { BLOG } from './../../services';

export const FETCH_EDIT_BLOG = {
    DEFAULT: 'FETCH_EDIT_BLOG_DEFAULT',
    RESET: 'FETCH_EDIT_BLOG_DEFAULT',
    CREATE: 'FETCH_EDIT_BLOG_CREATE',
    SUCCESS: 'FETCH_EDIT_BLOG_SUCCESS',
    FAILURE: 'FETCH_EDIT_BLOG_FAILURE',
}

export const defaultEditBlog = () => {
    return (dispatch, getState) => {
        dispatch(dispatcher.defaultEditBlog());
    }
}

export const resetEditBlog = () => {
    return (dispatch, getState) => {
        dispatch(dispatcher.resetEditBlog());
    }
}

export const editBlog = (params, id) => {
    return (dispatch, getState) => {
        dispatch(dispatcher.editBlog());
        BLOG.editBlog(params, id)
            .then((response) => {
                dispatch(dispatcher.editBlogSuccess(response.data, 'Success'));
            })
            .catch((error) => {
                dispatch(dispatcher.editBlogFailure('Error'));
            });
    }
}

const dispatcher = {
    defaultEditBlog: () => ({type: FETCH_EDIT_BLOG.DEFAULT}),
    resetEditBlog: () => ({type: FETCH_EDIT_BLOG.RESET}),
  
    editBlog: () => ({type: FETCH_EDIT_BLOG.GET}),
    editBlogSuccess: (params) => ({type: FETCH_EDIT_BLOG.SUCCESS, params}),
    editBlogFailure: (message) => ({type: FETCH_EDIT_BLOG.FAILURE, message}),
}