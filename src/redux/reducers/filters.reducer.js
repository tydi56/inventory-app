/*
 * Filters reducer
 */

const initialState = {
    locations: [{name:'location 1'}],
    operations: [
        {name: 'rig down'}, 
        {id: 2, name: 'rig up'}, 
        {id: 3, name:'rig down'}
    ],
    lengths: [
        {name: '25'}, 
        {id: 2, name: '20'}, 
        {id: 3, name:'65'}
    ]
};

function filters(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOCATION_FILTER':
            return { ...state, locations: action.locations};
        case 'SET_OPERATION_FILTER':
            return { ...state, operation: action.operation };
        case 'SET_LENGTH_FILTER':
            return { ...state, length: action.length };
        default:
            return state;
    }
}

export default filters;
