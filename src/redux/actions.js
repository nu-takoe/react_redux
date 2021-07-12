import { CLEAR, DECREMENT, FETCH_PIC, HIDE_LOADER, INCREMENT, PLUSNUMBER, SHOW_LOADER } from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function clear() {
    return {
        type: CLEAR
    }
}

export function plusNumber(property) {
    return {
        type: PLUSNUMBER,
        payload: property,
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}

export function fetchPic() {
    return async dispatch => {
        dispatch(showLoader())
        const target = Math.floor(1 - 0.5 + Math.random() * (5000));
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${target}`);
        const json = await response.json()
        dispatch({
            type: FETCH_PIC,
            payload: json.url,
        })
        dispatch(hideLoader())
    }
}