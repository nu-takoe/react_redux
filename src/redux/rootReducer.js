import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { imgReducer } from "./imgReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    img: imgReducer,
})