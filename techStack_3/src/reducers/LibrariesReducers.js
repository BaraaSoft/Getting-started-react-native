
const libraries = (state = [], action) => {
    switch (action.type) {
        case "FETCH_LIBRARIES":
            return action.payload;

        default:
            return state;
    }
}

const selectedLibrary = (state = { id: null }, action) => {
    switch (action.type) {
        case 'LIBRARY_SEL':

            return { ...action.payload };

        default:
            return state;
    }
}

export default {
    libraries,
    selectedLibrary
};