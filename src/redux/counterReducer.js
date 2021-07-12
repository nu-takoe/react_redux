import { CLEAR, DECREMENT, INCREMENT, PLUSNUMBER } from "./types"

const initialState = {
    counterProperty: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counterProperty: state.counterProperty + 1 }

        case DECREMENT:
            return { ...state, counterProperty: state.counterProperty - 1 }

        case CLEAR:
            return { ...state, counterProperty: 0 }

        case PLUSNUMBER:
            return { ...state, counterProperty: state.counterProperty + Number(action.payload) }

        default:
            return state
    }
}