/*
 * Filters component
 *
 * Allows the user to select certain options
 * to filter the displayed inventory data.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, CheckBox} from 'react-native';
import Picker from './common/Picker.component.js';
import { getMockInvData } from '../assets/js/utils.js';
import KeyboardScroller from './common/KeyboardScroller.component.js';
import { 
        setLocationsFilter, 
        setOperationsFilter, 
        setDimensionsFilter 
    } from '../redux/actions/filters.action.js';

class Filters extends React.Component {

    static navigationOptions = {
        title: 'filters'
    };

    static propTypes = { 
        dispatch: PropTypes.func.isRequired,
        filters: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            availLocFilters: [],
            availOpFilters: [],
            availDimFilters: []
        }
    }

    componentDidMount() {
        var invData = getMockInvData();
        var locations = [...new Set(invData.map((item, i) => item['location']))];
        var operations = [...new Set(invData.map((item, i) => item['operation']))];
        var dimensions = [...new Set(invData.map((item, i) => item['dimension']))];

        this.setState({
                availLocFilters: locations.map((loc, i) => {
                                return {name: loc, id: i}
                            }),
                availOpFilters: operations.map((op, i) => {
                                return {name: op, id: i}
                            }),
                availDimFilters: dimensions.map((dim, i) => {
                            return {name: dim, id: i}
                          })
        });
    }
    
    /**
     * Dispatch action to update locations filter
     *
     * @param { array } locations 
     */
    onSelectedLocationsChange = locations => {
        this.props.dispatch(setLocationsFilter(locations));
    }

    /**
     * Dispatch action to update operations filter
     *
     * @param { array } operations
     */
    onSelectedOperationsChange = operations => {
        this.props.dispatch(setOperationsFilter(operations));
    }

    /**
     * Dispatch action to update lengths filter
     *
     * @param { array } lengths
     */
    onSelectedDimensionsChange = dimensions => {
        this.props.dispatch(setDimensionsFilter(dimensions));
    }

    render() {

        var { available, applied } = this.props.filters;
        var {
            availLocFilters,
            availOpFilters,
            availDimFilters
        } = this.state;

        return (
            <KeyboardScroller>
                    <Picker
                        title='Locations'
                        items={ availLocFilters }
                        selected={ applied.locations }
                        onChange={ this.onSelectedLocationsChange}
                        canAddItems={true}
                    />

                    <Picker
                        title='Operations'
                        items={ availOpFilters }
                        selected={ applied.operations }
                        onChange={ this.onSelectedOperationsChange }
                    />
                    
                    <Picker
                        title='Lengths'
                        items={ availDimFilters }
                        selected={ applied.dimensions }
                        onChange={ this.onSelectedDimensionsChange }
                    />
            </KeyboardScroller>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Filters);
