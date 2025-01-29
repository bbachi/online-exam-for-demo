import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

// import MenuOverlay from '../exam/menuOverlay';
import { StyleSheet, Dimensions } from 'react-native';

export default function NotificationMenu({handleNotifications}) {

    const navigateBtns = [];
    navigateBtns.push(<TouchableOpacity key={'notallowed'} style={[styles.submitbutton, styles.navigationBtn]} onPress={() => handleNotifications(notificationAllowed)}><Text style={styles.navigationBtnText}>Not Allow</Text></TouchableOpacity>);
    navigateBtns.push(<TouchableOpacity key={'allowed'} style={[styles.submitbutton, styles.navigationBtn]} onPress={() => handleNotifications(notificationAllowed)}><Text style={styles.navigationBtnText}>Allow</Text></TouchableOpacity>);

    return (
        <View style={styles.container}>
            <View>
                {/* <MenuOverlay />
                <View style={[styles.menu, styles.headerWrapper]}>
                    <Text style={styles.headerText}>"E-fasikül" Wants To Send You Notifications</Text>
                    <Text style={styles.headerText}>Notifications can include alerts, sounds, and signs. These can be set in Settings.</Text>
                    <View style={[styles.alternativeLayoutButtonContainer]}>
                        {navigateBtns}
                    </View>
                </View> */}
            </View>
        </View>
    );
}

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

styles = StyleSheet.create({
    container : {
        flex: 1,
        position : 'absolute',
        left: 0,
        top: 0,
        width : width, 
        height : height,
        paddingTop : 10,
        paddingLeft : 10,
        paddingRight : 10,
        paddingBottom : 10,
    },
    menu: {
        backgroundColor: '#000000',
        position : 'absolute',
        width : 270, 
        height : 200,
        paddingTop : 10,
        paddingLeft : 10,
        paddingRight : 10,
        paddingBottom : 10,
        borderRadius: 10,
        top: 150,
        left: '20%',
    },
    headerWrapper: {
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 19,
        paddingLeft : 16,
        paddingRight : 16,
        paddingBottom : 19,
    },
    headerText: {
        marginBottom: 20,
        color: '#ffffff',
    },
    alternativeLayoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    submitbutton: {
        alignItems: 'center',
        alignContent: 'space-between',
        padding: 5,
        backgroundColor: '#ffffff',
        borderWidth: 0,
        borderRadius: 32,
        borderColor: '#ffffff',
        borderBottomWidth: 0,
        color: '#ffffff',
        height: 32,
        width: 32,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        textTransform: 'uppercase',
    },
    navigationBtnText:{
        color: '#0A84FF',
    },
    navigationBtn: {
        width: 120,
        alignItems: 'center',
    },
});
