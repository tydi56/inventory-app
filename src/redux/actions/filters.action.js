/*
 * Filters actions
 */

/**
 * Action to set available filters
 *
 * @param { object } available 
 */
 export function setAvailableFilters(available) {
    return {
        type: 'SET_AVAILABLE_FILTERS',
        available: available
    }
 }

/**
 * Action to set location filters
 *
 * @param { string } locations 
 */
export function setLocationsFilter(locations) {
    return {
        type: 'SET_LOCATIONS_FILTER',
        locations: locations
    }
}

/**
 * Action to set operations filters
 *
 * @param { string } operations 
 */
export function setOperationsFilter(operations) {
    return {
        type: 'SET_OPERATIONS_FILTER',
        operations: operations
    }
}

/**
 * Action to set lengths filters
 *
 * @param { string } lengths 
 */
export function setDimensionsFilter(dimensions) {
    return {
        type: 'SET_DIMENSIONS_FILTER',
        dimensions: dimensions
    }
}
