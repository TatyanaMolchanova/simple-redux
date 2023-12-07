import {ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function enableButtons() {
    return {
        type: ENABLE_BUTTONS
    }
}


export function disableButtons() {
    return {
        type: DISABLE_BUTTONS
    }
}


export function asyncIncrement() {
    return function (dispatch){
        dispatch(disableButtons())
        setTimeout(() => {
            dispatch(increment())
            // dispatch({type: ASYNC_INCREMENT})
            dispatch(enableButtons())
        }, 1500)
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function changeTheme(newTheme) {
    console.log('newTheme', newTheme);
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}
