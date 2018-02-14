/*
 * Combine and export reducers
 */

import { combineReducers }  from 'redux';
import filters from './filters.reducer.js';

const reducers =  combineReducers({
    filters
});

export default reducers;
