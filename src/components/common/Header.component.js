/*
 * Headers component
 *
 * Renders re-usable header for each view
 */

import React from 'react';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { headerStyles } from '../../assets/css/styles.js';
import { Text, View, TouchableOpacity} from 'react-native';

export default class Header extends React.Component {

    static propTypes = { 
        navigation: PropTypes.object
    };

    render() {

        return (
            <View style={headerStyles.header}>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('AddItem')}>
                    <Ionicons 
                        style={headerStyles.headerButton} 
                        name="md-add-circle" 
                        size={25}  
                    />
                </TouchableOpacity>

                <Text style={headerStyles.headerTitle}>inventory</Text>

                <TouchableOpacity
                     onPress={() => this.props.navigation.navigate('Filters')}>
                    <Feather 
                        style={headerStyles.headerButton} 
                        name="filter" 
                        size={25} 
                    />
                </TouchableOpacity>
            </View>
        );
        
    }
}
