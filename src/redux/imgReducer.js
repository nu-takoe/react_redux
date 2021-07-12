import { FETCH_PIC, HIDE_LOADER, SHOW_LOADER } from "./types"

const initialState = {
    imgObj: {
        url: 'none'
    },
    loader: false,
}

export function imgReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PIC:
            return { ...state, imgObj: { url: action.payload } }

        case SHOW_LOADER:
            return { ...state, loader: true }

        case HIDE_LOADER:
            return { ...state, loader: false }

        default:
            return state
    }
}