import { types } from "../types/types"

export const incrementAsyncCounter = (counter) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(incrementCounter(counter));
        }, 3000);
    }
}


export const incrementCounter = (counter) => {
    return {
        type: types.incrementCounter,
        payload: counter
    }
}

export const decrementCounter = (counter) => {
    return {
        type: types.decrementCounter,
        payload: counter
    }
}

export const resetCounter = (counter) => {
    return {
        type: types.resetCouter,
        payload: counter
    }
}
