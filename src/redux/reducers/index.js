import { combineReducers } from 'redux';

import popupReducer from './popupReducer/popupReducer.js';

const combinedReducers = combineReducers({
    popupReducer
});

export default combinedReducers;