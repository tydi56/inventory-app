
/**
 * Action to fetch inventory
 * 
 */
export function getInventory() {
    return {
        type: 'CALL_API',
        endpoint: 'get-inventory'
    };
}

/**
 * Action to set inventory items
 *
 * @param { array } items 
 */
export function setInventory(items) {
    return {
        type: 'SET_INVENTORY',
        items: items
    }
}
