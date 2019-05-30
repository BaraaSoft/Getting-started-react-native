
const libraries = (state = [], action) => {
    switch (action.type) {
        case "FETCH_LIBRARIES":
            return action.payload;

        default:
            return state;
    }
}

export default libraries;