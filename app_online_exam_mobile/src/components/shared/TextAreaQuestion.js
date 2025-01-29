import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

function TextAreaQuestion({surveyQuestion, index, onAnswer}) {

    return (
        <View>
            <Text style={styles.infoText}>{index}{surveyQuestion.question}</Text>
            <TextInput style={styles.textinput} multiline={true}
    numberOfLines={4} onChangeText={(e) => onAnswer(e, surveyQuestion.questionId)}/>
        </View>
    )
}

export default TextAreaQuestion

const styles = StyleSheet.create({
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        color: '#BABABA',
        marginBottom: 30,
        marginTop: 10,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 5,
        width: '95%',
        height: 60,
    },
});
