/*
 * Filters reducer
 */

// NOTE: The 'dimensions' property name was chosen instead
// of 'lengths' to avoid confusion between the Array property 'length'
const initialState = {
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
};

function filters(state = initialState, action) {
    switch (action.type) {
        case 'SET_AVAILABLE_FILTERS':
            return { 
                ...state, 
                available: action.available
            };
        case 'SET_LOCATIONS_FILTER':
            return { 
                ...state, 
                applied: {
                    ...state.applied, 
                    locations: action.locations 
                } 
            };
        case 'SET_OPERATIONS_FILTER':
            return { 
                ...state,
                 applied: {
                    ...state.applied, 
                    operations: action.operations 
                } 
            };
        case 'SET_DIMENSIONS_FILTER':
            return { 
                ...state, 
                applied: {
                    ...state.applied, 
                    dimensions: action.dimensions 
                } 
            };
        default:
            return state;
    }
}

export default filters;
