/*
 * Headers component
 */

import React from 'react';
import styles from '../../assets/styles.js';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Header extends React.Component {

    render() {

        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddItem')}>
                    <Ionicons 
                        style={styles.headerButton} 
                        name="md-add-circle" 
                        size={25}  
                    />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>inventory</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Filters')}>
                    <Feather 
                        style={styles.headerButton} 
                        name="filter" 
                        size={25} 
                    />
                </TouchableOpacity>
            </View>
        );
        
    }
}
