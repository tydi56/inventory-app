/*
 * Filters component
 *
 * Allows the user to select certain options
 * to filter the displayed inventory data.
 *
 * TODO: Adjust components upon keyboard access/avoid keyboard
 * TODO: Standardize selected item tags (like in Inventory component)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { filterStyles } from '../assets/css/styles.js';
import MultiSelect from 'react-native-multiple-select';
import KeyboardScroller from './common/KeyboardScroller.component.js';
import { setLocationsFilter, setOperationsFilter, setDimensionsFilter } from '../redux/actions/filters.action.js';

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
     * @param { string } location 
     */
    onSelectedLocationsChange = location => {
        this.props.dispatch(setLocationsFilter(location));
    }

    /**
     * Dispatch action to update operations filter
     *
     * @param { string } operation 
     */
    onSelectedOperationsChange = operation => {
        this.props.dispatch(setOperationsFilter(operation));
    }

    /**
     * Dispatch action to update lengths filter
     *
     * @param { string } length 
     */
    onSelectedDimensionsChange = dimension => {
        this.props.dispatch(setDimensionsFilter(dimension));
    }

    render() {

        var { available, applied } = this.props.filters;

        return (
            <KeyboardScroller>
                <Card title='LOCATIONS'>
                        <MultiSelect 
                            onFocus={e => console.log(e)}
                            items={available.locations}
                            selectedItems={applied.locations}
                            onSelectedItemsChange={this.onSelectedLocationsChange}
                            uniqueKey='name'
                            tagRemoveIconColor='#6FA7C2'
                            tagBorderColor='#6FA7C2'
                            submitButtonColor='#6FA7C2'
                            hideSubmitButton={true}
                        />
                </Card>
                <Card title='OPERATIONS'>
                    <MultiSelect 
                        items={available.operations}
                        selectedItems={applied.operations}
                        onSelectedItemsChange={this.onSelectedOperationsChange}
                        uniqueKey='name'
                        tagRemoveIconColor='#6FA7C2'
                        tagBorderColor='#6FA7C2'
                        submitButtonColor='#6FA7C2'
                        hideSubmitButton={true}
                    />
                </Card>
                    
                <Card title='LENGTH'>
                    <MultiSelect
                        onContentSizeChange={this._onContentSizeChange}
                        items={available.dimensions}
                        selectedItems={applied.dimensions}
                        onSelectedItemsChange={this.onSelectedDimensionsChange}
                        uniqueKey='name'
                        tagRemoveIconColor='#6FA7C2'
                        tagBorderColor='#6FA7C2'
                        submitButtonColor='#6FA7C2'
                        hideSubmitButton={true}
                    />
                </Card>
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
