import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

function RadioQuestion({surveyQuestion, index, onAnswer}) {
    const [answer, setValue] = React.useState(null);


    const setAnswer = (selectedAnswer) => {
        setValue(selectedAnswer);
        onAnswer(selectedAnswer, surveyQuestion.questionId)
    }
    const createRadioOption = (option, index) => {

        return (
            <View key={'radio' + index}>
                <Text><RadioButton value={option} /><Text>{option}</Text></Text>
            </View>
        )
    }

    const radioOptions = surveyQuestion.radioOptions.map((option, index) => createRadioOption(option, index))
  
    return (
        <View>
            <Text style={styles.infoText}>{index}{surveyQuestion.question}</Text>
            <RadioButton.Group onValueChange={newValue => setAnswer(newValue)} value={answer}>
                    {radioOptions}
            </RadioButton.Group>
        </View>
    );
  }

  export default RadioQuestion

  const styles = StyleSheet.create({
    alternativeLayoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    endExamBtn: {
        width: 100,
        paddingLeft: 5,
        paddingRight: 5,
    },
    infoText: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 22
    },
});
