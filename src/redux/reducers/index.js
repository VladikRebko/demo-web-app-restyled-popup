import { combineReducers } from 'redux';

import tableReducer from './tableReducer/tableReducer.js';
import popupReducer from './popupReducer/popupReducer.js';

const combinedReducers = combineReducers({
    tableReducer,
    popupReducer
});

export default combinedReducers;