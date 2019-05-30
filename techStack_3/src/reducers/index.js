import { combineReducers } from 'redux';
import librariesReducers from './LibrariesReducers'

export default combineReducers({
    libraries: librariesReducers
})