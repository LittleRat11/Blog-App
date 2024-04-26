import { actionTypes } from "./actionTypes";

export const initialState = {
    blogs: [],
    blog: {},
}
export const reducer = (state, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_BLOGS:
            return {
                ...state,
                blogs: payload
            }
        case actionTypes.SELECTED_BLOG:
            return {
                ...state,
                blog: payload
            }

        case actionTypes.ADD_BLOG:
            return {
                ...state,
                blogs: payload
            }
    }
}