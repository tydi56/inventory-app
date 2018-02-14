/*
 * Filters actions
 */
 
export function setLocationFilter(location) {
	return {
		type: 'SET_LOCATION_FILTER',
		location: location
	}
}

export function setOperationFilter(operation) {
	return {
		type: 'SET_OPERATION_FILTER',
		operation: operation
	}
}

export function setLengthFilter(length) {
	return {
		type: 'SET_LENGTH_FILTER',
		length: length
	}
}
