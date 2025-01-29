import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import InstructionScreen from '../../screens/InstructionScreen';
import Footer from './footer';

export default function Welcome({navigation}) {
    return (
        <View style={styles.instructionsWrapper}>
            <InstructionScreen>
                <View style={styles.header}>
                <Text style={styles.welcomeHeaderText}>WELCOME!</Text>
                <Text style={styles.welcometext}>Before you start the exam</Text>
                <Text style={styles.welcometext}>Please proceed CAREFULLY FOR INFORMATION ABOUT OUR SITE</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Connection')}>{<Footer />}</TouchableOpacity>
            </InstructionScreen>
        </View>
    );
}

const styles = StyleSheet.create({
    footerWrapper: {
        alignSelf: 'flex-end',
        marginTop: 20,
   },
   instructionsWrapper: {
        flex: 1,
    },
    header: {
        height: '85%',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 1,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeHeaderText: {
        paddingBottom: 48,
        fontSize: 40,
        fontWeight: 'normal'
    },
    welcometext: {
        textAlign: 'center',
        textTransform: 'uppercase',
        lineHeight: 22,
        fontSize: 18,
        color: '#000000',
        opacity: 0.6
    }
});
