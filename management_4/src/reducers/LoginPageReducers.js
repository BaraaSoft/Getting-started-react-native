import * as types from '../actions'

const LoadingLoginReducers = (state = false, action) => {

    switch (action.type) {
        case types.SET_LOGIN_LOADING:
            return action.payload
        default:
            return state
    }
}

export default { loginLoading: LoadingLoginReducers }