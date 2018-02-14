/*
 * App Root Component
 *
 * Brings project together and handles routing.
 *
 */

import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Inventory from './components/Inventory.component.js';
import AddItem from './components/AddItem.component.js';
import Filters from './components/Filters.component.js';

import store from './redux/store.js';

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
