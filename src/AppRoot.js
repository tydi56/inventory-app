/*
 * App Root Component
 *
 * Brings project together and handles routing.
 *
 */

import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { getMockInvData } from './assets/js/utils.js';
import { setAvailableFilters } from './redux/actions/filters.action.js';

import Inventory from './components/Inventory.component.js';
import AddItem from './components/AddItem.component.js';
import Filters from './components/Filters.component.js';

import store from './redux/store.js';

// Initialize available filters
// TODO: Figure out something better than this
var invData = getMockInvData();
var locations = [...new Set(invData.map((item, i) => item['location']))];
var operations = [...new Set(invData.map((item, i) => item['operation']))];
var dimensions = [...new Set(invData.map((item, i) => item['length']))];

// Initialize available inventory data filters
store.dispatch(setAvailableFilters(
    {
        locations: locations.map((loc, i) => {
                        return {name: loc, id: i}
                    }),
        operations: operations.map((op, i) => {
                        return {name: op, id: i}
                    }),
        dimensions: dimensions.map((len, i) => {
                    return {name: len, id: i}
                  })
    }
));

const RootStack = StackNavigator({
    Inventory: {
        screen: Inventory
    },
    AddItem: {
        screen: AddItem
    },
    Filters: {
        screen: Filters
    },
});

export default class AppRoot extends React.Component {
    render() {
        return <Provider store={store}>
                    <RootStack />
                </Provider>;
    }
}
