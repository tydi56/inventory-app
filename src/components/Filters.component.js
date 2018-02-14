/*
 * Filters component
 *
 * Allows the user to select certain options
 * to filter the displayed inventory data.
 *
 * TODO: Adjust components upon keyboard access
 * TODO: Centralize inventory data/filters
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from '../assets/styles.js';
import { Card, Button } from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { setLocationFilter,setOperationFilter, setLengthFilter } from '../redux/actions/filters.action.js';

class Filters extends React.Component {

    static navigationOptions = {
        title: 'filters'
    };

    constructor(props) {

        super(props);

        this.state = {
            filteredLocations: [],
            filteredOperation: [],
            filteredLength: [],
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
                        length: 100,
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
                        length: 50,
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
                        length: 25,
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

    applyFilters() {
        this.props.dispatch(setLocationFilter(this.state.filteredLocations));
        this.props.dispatch(setOperationFilter(this.state.filteredOperation));
        this.props.dispatch(setLengthFilter(this.state.filteredLength));
    }

    filterCriteria(filter) {

        var set = [...new Set(this.state.invData.map((item, i) => item[filter]))];

        return set.map((item, i) => {
            return {name: item, id: i}
        });
    }

    onSelectedLocationChange = filteredLocations => {
        this.setState({ filteredLocations });
    }

    onSelectedOperationChange = filteredOperations => {
        this.setState({ filteredOperations });
    }

    onSelectedLengthChange = filteredLengths => {
        this.setState({ filteredLengths });
    }

    render() {

        return (
            <View>

                <View style={styles.buttonGroup}>
                    <Button
                        onPress={() => this.applyFilters()}
                        text='apply'
                        buttonStyle={styles.button}
                        iconRight
                        icon={
                            <FontAwesome 
                                style={styles.buttonIcon} 
                                name="check" 
                                size={25} 
                            />
                        }
                    />
                    <Button
                        text='clear'
                        buttonStyle={styles.button}
                        iconRight
                        icon={
                            <FontAwesome 
                                style={styles.buttonIcon} 
                                name="remove" 
                                size={25} 
                            />
                        }
                    />
                </View>

                {/* Location Filter Selector*/}
                <Card title='LOCATIONS'>
                    <MultiSelect 
                        items={this.filterCriteria('location')}
                        selectedItems={this.state.filteredLocations}
                        onSelectedItemsChange={this.onSelectedLocationChange}
                        uniqueKey="id"
                    />
                    <View>
                        {this.multiSelect && this.multiSelect.getSelectedItemsExt(this.state.filteredLocations)}
                    </View>
                </Card>
            
            
                {/* Operations Filter Selector*/}
                <Card title='OPERATIONS'>
                    <MultiSelect 
                        items={this.filterCriteria('operation')}
                        selectedItems={this.state.filteredOperations}
                        onSelectedItemsChange={this.onSelectedOperationsChange}
                        uniqueKey="id" 
                    />
                </Card>
                
                {/* Length Filter Selector*/}
                <Card title='LENGTH'>
                    <MultiSelect 
                        items={this.filterCriteria('length')}
                        selectedItems={this.state.filteredLengths}
                        onSelectedItemsChange={this.onSelectedLengthChange}
                        uniqueKey="id"
                        fixedHeight={true}
                    />
                </Card>
            
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Filters);
