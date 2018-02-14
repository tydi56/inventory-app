/*
 * Inventory component
 *
 * Displays inventory data. Intial data is unfiltered
 * and displays all inventory items.
 *
 * TODO: Centralize inventory data
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from '../assets/styles.js';
import Header from './common/Header.component.js';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { List, ListItem, Badge } from 'react-native-elements';
import { Text, View, FlatList, Platform, StatusBar} from 'react-native';

class Inventory extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            activeLocation: '',
            activeLocationIndex: 0,
            invData: [
                    {
                        location: 'Location 1',
                        operation: 'Rig Up',
                        serialNo: '11-13-17 205',
                        length: 20,
                        condition: {
                            ok: true,
                            scrap: false,
                            reWeb: false,
                            comments: ''
                        }
                    },
                    {
                        location: 'Location 1',
                        operation: 'Rig Up',
                        serialNo: '4-11-17 2',
                        length: 20,
                        condition: {
                            ok: true,
                            scrap: false,
                            reWeb: false,
                            comments: ''
                        }
                    },
                    {
                        location: 'Location 1',
                        operation: 'Rig Up',
                        serialNo: '10-31-17 44',
                        length: 20,
                        condition: {
                            ok: true,
                            scrap: false,
                            reWeb: false,
                            comments: ''
                        }
                    },
        
                    {
                        location: 'Location 2',
                        operation: 'Rig Down',
                        serialNo: '2-8-17 7',
                        length: 20,
                        condition: {
                            ok: true,
                            scrap: false,
                            reWeb: false,
                            comments: ''
                        }

                    },
                    {
                        location: 'Location 2',
                        operation: 'Rig Down',
                        serialNo: '10-31-17 31',
                        length: 20,
                        condition: {
                            ok: true,
                            scrap: false,
                            reWeb: false,
                            comments: ''
                        }
                    },
                    {
                        location: 'Location 2',
                        operation: 'Rig Down',
                        serialNo: '7-26-17 160',
                        length: 20,
                        condition: {
                            ok: true,
                            scrap: false,
                            reWeb: false,
                            comments: ''
                        }
                    }
                ]
        };

    }

    render() {

        return (
            <View style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>

                <Header navigation={this.props.navigation}/>

                <View style={styles.appliedFilters}>
                    {Object.keys(this.props.filters).map((filter,i) => {
                        // if(this.props.filters[filter] != undefined) {
                        //     return (
                        //         <Text style={styles.filter} key={i}>
                        //             <Feather style={styles.filterIcon} name="filter" size={25} />&nbsp;
                        //             {this.props.filters[filter]}
                        //         </Text>
                        //     );
                        // }
                    })}
                </View>

                <List>
                    <FlatList
                        data={this.state.invData}
                        keyExtractor={item => item.serialNo}
                        renderItem={({ item }) => (
                            <ListItem
                                roundAvatar
                                title={item.serialNo + ' @ ' + item.location}
                                subtitle={'length: ' + item.length + ' ft.'}
                            />
                        )}
                    />
                </List>
                
            </View>
        );
        
    }
}

function mapStateToProps(state, props) {
    return {
        filters: state.filters,
    }
}

export default connect(mapStateToProps)(Inventory);
