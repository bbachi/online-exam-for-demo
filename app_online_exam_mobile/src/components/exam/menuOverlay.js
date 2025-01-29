import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {
    TouchableHighlight,
    Text
} from 'react-native';

export default class MenuOverlay extends Component {

    render() {

        return (
            <TouchableHighlight 
                style={styles.overlay}>
                <Text></Text>
            </TouchableHighlight>
        );
    }
}

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        position : 'absolute',
        left: 0,
        top: 0,
        width : 150, 
        height : 150,
        paddingTop : 10,
        paddingLeft : 10,
        paddingRight : 10,
        paddingBottom : 10
    }
});