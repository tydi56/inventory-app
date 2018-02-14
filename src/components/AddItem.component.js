/*
 * Add Item Component
 *
 * Allows users to add additional/new
 * inventory items.
 *
 */

import React from 'react';
import { Text, View } from 'react-native';

export default class AddItem extends React.Component {

    static navigationOptions = {
        title: 'add item'
    };

    constructor(props) {
        super(props);
    }

    render() {
    
        return (
            <View>
                 <Text>Add Item</Text>
            </View>
        );
    }
}
