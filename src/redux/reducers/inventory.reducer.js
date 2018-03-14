/*
 * Inventory reducer
 */
const initialState = {
    items: []
};

function filters(state = initialState, action) {
    switch (action.type) {
    	case 'SET_INVENTORY':
            return { 
                ...state, 
                items: action.items
            };
        default:
            return state;
    }
}

export default filters;
