import {
    FETCH_BLOG,
    FETCH_GET_BLOG,
    FETCH_DETAIL_BLOG,
    FETCH_UPDATE_BLOG,
    FETCH_REMOVE_BLOG
} from './actions';

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    option: '', //get or remove
    data: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BLOG.DEFAULT:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: false,
                message: '',
            }
        case FETCH_BLOG.RESET:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: false,
                message: '',
                data: [],
                detail: {},
            }
        case FETCH_GET_BLOG.GET:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
                option: 'get',
            }
        case FETCH_GET_BLOG.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                data: action.params,
                option: 'get',
            }
        case FETCH_GET_BLOG.FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.message,
                option: 'get',
            }
        case FETCH_REMOVE_BLOG.GET:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
                option: 'remove',
            }
        case FETCH_REMOVE_BLOG.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.message,
                option: 'remove',
            }
        case FETCH_REMOVE_BLOG.FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.message,
                option: 'remove',
            }
        default:
          return state;
    }
}

export default reducer;