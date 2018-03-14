import { CALL_API } from '../middleware/api.middleware.js';

export function getInventory() {
    return {
    	type: 'CALL_API',
        endpoint: 'get-inventory'
    };
}

export function setInventory(items) {
	return {
		type: 'SET_INVENTORY',
		items: items
	}
}
