import data from '../reducers/libraries.json'

export const fetchLibraries = () => (dispatch) => {
    dispatch({
        type: 'FETCH_LIBRARIES',
        payload: data
    });
}

