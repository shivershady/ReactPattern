
export const initialState = {
    cat:{
        loading:false,
        data: [],
        mess: null,
    }
}

const productReducer = (state,action) => {
    switch (action.type) {
        case 'GETCATEGORY':
            return {
                ...state,
                loading: true
            };
        case 'GETCATEGORY_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case 'GETCATEGORY_ERROR':
            return {
                ...state,
                loading: false,
                mess: action.mess
            };
        default:
            return initialState
    }
}
export default productReducer