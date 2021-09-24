import { types } from '../types/types';

export const apiAsync = (id) => {
    return (dispatch) => {
        fetch(`https://www.breakingbadapi.com/api/characters/${id}`).then(body => body.json()).then(data => {
            dispatch(loadData(data[0]))
        }).catch(error => {

        });
    }
}

export const loadData = (data) => {
    return {
        type: types.loadApiBreakingBad,
        payload: data
    }
}