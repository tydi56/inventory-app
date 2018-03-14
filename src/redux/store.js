/*
 * Create the redux store
 *
 * Combine and export reducers
 */
import thunk from 'redux-thunk';
import api from './middleware/api.middleware.js';
import { combineReducers, createStore, applyMiddleware }  from 'redux';

import filters from './reducers/filters.reducer.js';
import inventory from './reducers/inventory.reducer.js';

const reducers =  combineReducers({
    inventory,
    filters
}); 
 
export default createStore(
    reducers,
    applyMiddleware(
        thunk,
        api
    )
);
