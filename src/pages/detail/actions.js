import { BLOG } from './../../services';

export const FETCH_DETAIL_BLOG = {
    DEFAULT: 'FETCH_DETAIL_BLOG_DEFAULT',
    RESET: 'FETCH_DETAIL_BLOG_DEFAULT',
    CREATE: 'FETCH_DETAIL_BLOG_CREATE',
    SUCCESS: 'FETCH_DETAIL_BLOG_SUCCESS',
    FAILURE: 'FETCH_DETAIL_BLOG_FAILURE',
}

export const defaultDetailBlog = () => {
    return (dispatch, getState) => {
        dispatch(dispatcher.defaultDetailBlog());
    }
}

export const resetDetailBlog = () => {
    return (dispatch, getState) => {
        dispatch(dispatcher.resetDetailBlog());
    }
}

export const detailBlog = (params) => {
    return (dispatch, getState) => {
        dispatch(dispatcher.detailBlog());
        BLOG.detailBlog(params)
            .then((response) => {
                dispatch(dispatcher.detailBlogSuccess(response.data, 'Success'));
            })
            .catch((error) => {
                dispatch(dispatcher.detailBlogFailure('Error'));
            });
    }
}

const dispatcher = {
    defaultDetailBlog: () => ({type: FETCH_DETAIL_BLOG.DEFAULT}),
    resetDetailBlog: () => ({type: FETCH_DETAIL_BLOG.RESET}),
  
    detailBlog: () => ({type: FETCH_DETAIL_BLOG.GET}),
    detailBlogSuccess: (params, message) => ({type: FETCH_DETAIL_BLOG.SUCCESS, params, message}),
    detailBlogFailure: (message) => ({type: FETCH_DETAIL_BLOG.FAILURE, message}),
}