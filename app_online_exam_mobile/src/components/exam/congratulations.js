import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ExamScreen from '../../screens/ExamScreen';

export default function Congratulations({ navigation }) {
        return (
            <View style={styles.examWrapper}>
                <ExamScreen>
                    <View style={styles.header}>
                        <View style={{alignItems: 'center', textAlign:'center', marginTop: 10}}>
                            <Image source={require('../images/Success.png')}/>
                            <Text style={styles.congratulationWrapper}>Congratulations! You have completed the exam!</Text>
                        </View>
                        <View >
                        <Text style={styles.infoText}>When your exam report is out, we will send you an e-mail / sms, and you can check it on the report screen. www.raporlar.com</Text>
                        <Text style={styles.infoText}>Before we exit, we have a very short questionnaire so that we can serve you better, we will have little surprises for those who participated in the survey.</Text>
                        </View>
                    </View>
                    <View style={[styles.alternativeLayoutButtonContainer, styles.footerWrapper]}>
                        <TouchableOpacity style={[styles.submitbutton, styles.navigateBtn]} onPress={() => navigation.navigate('Dashboard')}>
                            <Text style={[styles.buttontext, styles.navigateBtnText]}>Return to homepage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.submitbutton, styles.navigateBtn]} onPress={() => navigation.navigate('Survey')}>
                            <Text style={[styles.buttontext, styles.navigateBtnText]}>Go to the Survey</Text>
                        </TouchableOpacity>
                    </View>
                </ExamScreen>
            </View>
        );
}

const styles = StyleSheet.create({
    examWrapper: {
        flex: 1,
    },
    header: {
        height: '90%',
        width: '100%',
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    alternativeLayoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    congratulationWrapper: {
        color: '#00DC72',
        fontSize: 20
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
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0,
            shadowRadius: 1,
            elevation: 3,
            textTransform: 'uppercase',
    },
    endExamBtn: {
        width: 100,
        paddingLeft: 5,
        paddingRight: 5,
    },
    flaggedButton: {
        width: 100,
        borderRadius: 5,
        backgroundColor: '#13C196',
        color: '#ffffff',
    },
    lessonButton: {
        backgroundColor: 'rgba(102, 101, 98, 0.23)',
        left: 0,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttontext: {
        color: '#474646',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    endExamBtnText: {
        color: '#FF0505',
        fontSize: 9,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: '100'
    },
    timerWrapper: {
        fontSize: 25,
        color: '#4F4F4F',
        paddingLeft: 10
    },
    infoText: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 22
    },
    resultBtn: {
        backgroundColor: '#2BA4FC',
        width: 70,
        borderRadius: 5,
    },
    navigateBtn: {
        backgroundColor: '#00DC72',
        width: 150,
        borderRadius: 5,
    },
    navigateBtnText: {
        color: '#ffffff',
        fontSize: 12
    },
    footerWrapper: {
        paddingLeft: 20,
        paddingRight: 20
    }
});
