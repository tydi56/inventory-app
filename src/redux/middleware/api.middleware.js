/*
 * API middleware
 * Any API calls will be run through here first.
 */
import fetch from 'cross-fetch';
// import { setInventory } from '../actions/inventory.action.js';
import { getMockInvData } from '../../assets/js/utils.js';


/*
 * Returns response from API.
 *
 * Let errors bubble up and be caught at invocation point
 * for more precise debugging.
 */
export default store => next => action => {
    if (action.type !== 'CALL_API') {
        return next(action);
    }
    
    // Mock fetch until actual API exists
    return fetch('http://10.0.0.14:19001/')
        .then(response => { return true /* return  response.json() */ })
        .then(response => {
            // dispatch(setInventory(response))

            // Pretend it worked and mock it for now
            return Promise.resolve(getMockInvData());
        })

};

export const CALL_API = 'Call Api';
