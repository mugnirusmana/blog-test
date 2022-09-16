import {
    FETCH_EDIT_BLOG,
} from './actions';

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EDIT_BLOG.DEFAULT:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: false,
                message: '',
            }
        case FETCH_EDIT_BLOG.RESET:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: false,
                message: '',
            }
        case FETCH_EDIT_BLOG.CREATE:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case FETCH_EDIT_BLOG.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.message,
            }
        case FETCH_EDIT_BLOG.FAILURE:
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