/*
 * Tag component
 *
 * TODO: Expand icon library options
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { tagStyles } from '../../assets/css/styles.js';
import Feather from 'react-native-vector-icons/Feather';

export default class Tags extends React.Component {

    static navigationOptions = {
        header: null
    };

    static propTypes = { 
        tags: PropTypes.array.isRequired,
        icon: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {

        var { tags, icon } = this.props;
        
        return (
            <View style={tagStyles.tagContainer}>
    
                {tags.map((tagValue, i) => {
                    return (
                        <Text 
                            style={tagStyles.tag}
                            key={i}>
                            <Feather 
                                style={tagStyles.tagIcon} 
                                name={icon} 
                                size={25} 
                            />&nbsp;
                            {tagValue}
                        </Text>
                    );
                })}

            </View>
        );
        
    }
}
