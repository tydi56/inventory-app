/*
 * Picker component
 *
 * Provides the ability to select from multiple options leveraging
 * react-native-multiple-select. Selected items are displayed tag-style
 * below the picker list.
 *
 * A 'card' style picker will render a picker inside a Card component.
 * A 'minimal' style picker will render just the picker itself.
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
        title: PropTypes.string,
        style: PropTypes.string,
        hasTags: PropTypes.bool,
        style: PropTypes.oneOf(['card', 'minimal'])
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

        const { 
                items,
                selected,
                onChange,
                title,
                style,
                hasTags
            } = this.props;

        const picker = <MultiSelect
                            ref={ c => { this.multiSelect = c } }
                            hideTags
                            items={ items }
                            selectedItems={ selected }
                            onSelectedItemsChange={ onChange }
                            uniqueKey='name'
                            hideSubmitButton={ true }
                            selectText={ 'Pick ' + title }
                            searchInputPlaceholderText={ 'Search ' +  title + '...' }
                        />;

        const tagList = <Tags 
                            tags={ selected } 
                            icon='x' 
                            onTap={ this.removeItem } 
                        />;
        return (

            <View>
                { style === 'card' &&
                    // Render card style picker
                    <Card title={ title }>
                        { picker }

                        { hasTags && tagList }
                    </Card> 

                }

                { style === 'minimal' &&
                    // Render minimal style picker
                    <View>
                        { picker }

                        { hasTags && tagList }
                    </View>
                }
            </View>
        );
        
    }
}

Picker.defaultProps = {
    style: 'card',
    hasTags: true
};
