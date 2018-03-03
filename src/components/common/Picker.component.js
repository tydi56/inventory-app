/*
 * Picker component
 *
 * Provides the ability to select from multiple options leveraging
 * react-native-multiple-select. Selected items are displayed tag-style
 * below the picker list.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View} from 'react-native';
import Tags from './Tags.component.js';
import { Card } from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';

export default class Picker extends React.Component {

    static propTypes = { 
        items: PropTypes.array.isRequired,
        selected: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
        title: PropTypes.string
    };

    /**
     * Removes picker item
     *
     * @param { string } item 
     */
    removeItem = (item) => {
        this.multiSelect._removeItem(this.multiSelect._findItem(item));
    }

    render() {

        var { 
                items,
                selected,
                onChange,
                title
            } = this.props;

        return (
            <View>
                <Card title={ title }>
                    <MultiSelect
                        ref={ c => { this.multiSelect = c } }
                        hideTags
                        items={ items }
                        selectedItems={ selected }
                        onSelectedItemsChange={ onChange }
                        uniqueKey='name'
                        hideSubmitButton={ true }
                        selectText={ 'Pick ' + title }
                        searchInputPlaceholderText={ 'Search ' +  title + '...' }
                    />
                    <Tags 
                        tags={ selected } 
                        icon='x' 
                        onTap={ this.removeItem } 
                    />
                </Card>
            </View>
        );
        
    }
}
