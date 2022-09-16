import {
    FETCH_DETAIL_BLOG,
} from './actions';

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: {},
    message: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DETAIL_BLOG.DEFAULT:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: false,
                message: '',
            }
        case FETCH_DETAIL_BLOG.RESET:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: false,
                message: '',
                data: {},
            }
        case FETCH_DETAIL_BLOG.CREATE:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case FETCH_DETAIL_BLOG.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                data: action.params,
                message: action.message,
            }
        case FETCH_DETAIL_BLOG.FAILURE:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.message,
            }
        default:
          return state;
    }
}

export default reducer;