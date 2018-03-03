/*
 * Inventory component
 *
 * Displays inventory data.
 *
 * TODO: Centralize inventory data (perhaps as prop)
 * TODO: Seperate filters into applicable and non-applicable
 * TODO: Verify remaining available filter types
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tags from './common/Tags.component.js';
import Header from './common/Header.component.js';
import { invStyles } from '../assets/css/styles.js';
import { List, ListItem } from 'react-native-elements';
import { getMockInvData } from '../assets/js/utils.js';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text, View, FlatList, Platform, StatusBar } from 'react-native';

class Inventory extends React.Component {

    static navigationOptions = {
        header: null
    };

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        filters: PropTypes.object.isRequired,
        navigation: PropTypes.object
    };

    constructor(props) {
        super(props);
        
        this.state = {
            inventory: []
        };
    }

    // Initialize inventory on mount
    componentDidMount() {
        this.setFilteredInventory(this.props.filters.applied);
    }

    // Subsequently update inventory output based on new/removed filter props
    componentWillReceiveProps(nextProps) {
        this.setFilteredInventory(nextProps.filters.applied);
    }

    /**
     * Set filtered inventory to state
     *
     * @param { object } filters 
     */
    setFilteredInventory(filters) {
        this.setState({
            inventory: this.filteredInventory(getMockInvData(), filters)
        });
    }

    /**
     * Validate filters and return a new filtered inventory array
     *
     * @param { array } inventory
     * @param { object } filters
     * @return { array } filtered inventory
     */
    filteredInventory (inventory, filters)  {

        return inventory.filter(item => {
            
            // Return if no filters
            if (filters.locations.length == 0 &&
                filters.operations.length == 0 &&
                filters.dimensions.length == 0) {
                return inventory;
            }

            const items = Object.values(item);

            // Validates filter item
            var meetsCriteria = (criteria) => {
                if (criteria.length == 0) {
                    return;
                }

                return criteria.some(filter => {
                    return items.indexOf(filter) >= 0;
                });
            }

            if (meetsCriteria(filters.locations) === false) {
                return false;
            }

            if (meetsCriteria(filters.operations) === false) {
                return false;
            }

            if (meetsCriteria(filters.dimensions) === false) {
                return false;
            }

            return true;

        });

    }

    render() {

        var { navigation, filters } = this.props;
        var { inventory, applicableFilters } = this.state
        var filterTags = [
                        ...filters.applied.locations,
                        ...filters.applied.operations,
                        ...filters.applied.dimensions
                    ];
        
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>

                <Header navigation={ navigation } />

                {/* List of filters */}
                <Tags
                    containerStyles={{ marginTop: 15 }}
                    tags={ filterTags } 
                    icon="filter" 
                />

                {/* Rendered inventory */}
                {inventory.length == 0 ? (

                    // Alert if no inventory items were found
                    <View style={ invStyles.noItemsContainer }>
                        <Text style={ invStyles.noItemsText }>
                            No inventory items found :(
                        </Text>
                    </View>

                ) : (

                    <List>
                        <FlatList
                            data={ inventory }
                            keyExtractor={ item => item.serialNo }
                            renderItem={({ item }) => (
                                <ListItem
                                    roundAvatar
                                    title={ item.serialNo + ' @ ' + item.location }
                                    subtitle={
                                        <View>
                                            <Text style={ invStyles.itemSubtitle }> 
                                                { item.operation }
                                                <Entypo name="dot-single"/>
                                                { item.dimension }
                                            </Text>
                                        </View>
                                    }
                                />
                            )}
                        />
                    </List>

                  )}
                
            </View>
        );
        
    }
}

function mapStateToProps(state, props) {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Inventory);
