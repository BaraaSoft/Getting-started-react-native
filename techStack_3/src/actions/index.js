import data from '../reducers/libraries.json'

export const fetchLibraries = () => (dispatch) => {
    dispatch({
        type: 'FETCH_LIBRARIES',
        payload: data
    });
}

export const selectLibrary = (data) => (dispatch) => {
    dispatch({
        type: 'LIBRARY_SEL',
        payload: data
    });
}

