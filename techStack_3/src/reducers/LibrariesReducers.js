import librariesList from './libraries.json'

const libraries = (state = [], action) => {
    switch (action.type) {
        case "FETCH_LIBRARIES":
            return librariesList;

        default:
            return state;
    }
}

export default { libraries };