/*
 * KeyboardScroller component
 *
 * The KeyboardScroller component utilizes a ScrollView 
 * and allows focused elements to maneuver around the 
 * keyboard to avoid overlap.
 *
 * TODO: Return components if comprised of non-focusable elements
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactNative, 
       { 
            ScrollView, 
            Keyboard, 
            TextInput, 
            View 
        } from 'react-native';

export default class KeyboardScroller extends React.Component {

    static propTypes = { 
        children: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            spacerHeight: 0
        };
    }

    componentWillMount () {
        // Set keyboard listeners
        this.keyboardShown = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardHide = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    /**
     * Shown keyboard listener
     *
     * @param { event } e 
     */
     keyboardDidShow = e => {
        const  { State: TextInputState } = TextInput;
        const focused = TextInputState.currentlyFocusedField();

        // Scroll to focused element
        this.scroller.scrollResponderScrollNativeHandleToKeyboard(
            ReactNative.findNodeHandle(focused),
            150, // offset just a bit
            true
        );
        
        // Set spacer to keyboard's height
        this.setState({
            spacerHeight: e.endCoordinates.height
        });
    };

    /**
     * Hidden keyboard listener
     *
     * @param { event } e 
     */
    keyboardDidHide = e => {
        // Remove spacer
        this.setState({
            spacerHeight: 0
        });
    }

    componentWillUnmount() {
        // Remove keyboard listeners
        this.keyboardShown.remove();
        this.keyboardHide.remove();
    }

    render() {

        var { children } = this.props;
        var { spacerHeight } = this.state;
        
        return (
            <ScrollView ref={ c => this.scroller = c }>
                {/* Render child elements */}
                { children }

                {/* Add space to allow the bottom elements to scroll up */}
                <View style={{ height: spacerHeight }}></View>
            </ScrollView>
        );
        
    }
}
