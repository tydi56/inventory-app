/*
 * Tag component
 *
 * TODO: Expand icon library options
 * TODO: Make 'onTap()' a bit more generic (rather than passing tag value)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { tagStyles } from '../../assets/css/styles.js';
import Feather from 'react-native-vector-icons/Feather';

export default class Tags extends React.Component {

    static propTypes = { 
        tags: PropTypes.array.isRequired,
        icon: PropTypes.string,
        onTap: PropTypes.func,
        containerStyles: PropTypes.object
    };

    render() {

        var { 
                tags, 
                icon, 
                onTap, 
                containerStyles 
            } = this.props;
        
        return (
            <View style={ [ containerStyles, tagStyles.tagContainer ] }>
    
                {tags.map((tagValue, i) => {
                    return (
                        <Text
                            onPress={ () => { onTap && onTap(tagValue) } }
                            style={ tagStyles.tag }
                            key={ i }>
                            <Feather 
                                style={ tagStyles.tagIcon } 
                                name={ icon } 
                                size={ 25 } 
                            />&nbsp;
                            { tagValue }
                        </Text>
                    );
                })}

            </View>
        );
        
    }
}
