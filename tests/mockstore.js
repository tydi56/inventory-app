import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import api from '../src/redux/middleware/api.middleware.js';

const middlewares = [thunk, api];

export const mockStore = configureStore(middlewares);

export const initialState = {
    filters: {
        available: {
            locations: [],
            operations: [],
            dimensions: []
        },
        applied: {
            locations: [],
            operations: [],
            dimensions: []
        }
    },
    inventory: {
        items: []
    }
};