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

        return (
            <KeyboardScroller>
                    <Picker
                        title='Locations'
                        items={ available.locations }
                        selected={ applied.locations }
                        onChange={ this.onSelectedLocationsChange}
                    />

                    <Picker
                        title='Operations'
                        items={ available.operations }
                        selected={ applied.operations }
                        onChange={ this.onSelectedOperationsChange }
                    />
                    
                    <Picker
                        title='Lengths'
                        items={ available.dimensions }
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
