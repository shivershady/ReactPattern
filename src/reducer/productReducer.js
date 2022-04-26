import * as TYPE from "../constant/product";

const initialState = {
    list: {
        loading: false,
        data: [],
        mess: null,
    },
    detail: {
        loading: false,
        data: [],
        mess: null,
    },
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.GET_LIST_PRODUCT:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true,
                },
            };

        case TYPE.GET_LIST_PRODUCT_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    data: action.data,
                },
            };

        case TYPE.GET_LIST_PRODUCT_ERROR:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    mess: action.mess,
                },
            };

        case TYPE.GET_DETAIL_PRODUCT:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loading: false,
                    data: action.data,
                },
            };

        default:
            return initialState;
    }
};

export default productReducer;
