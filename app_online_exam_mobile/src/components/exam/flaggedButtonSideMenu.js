import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import MenuOverlay from './menuOverlay'
import { StyleSheet, Dimensions } from 'react-native';

export default function FlaggedButtonSideMenu({isFlagged, currentQuestionId, examQuestions, currentSubject, onSubject, subject, answerCount, examName}) { 
    const questions = subject.questions;
    const lessons = [];
    const answers = [];
    const selectFlaggedQuestions = (flaggedQuestions, i) => {
        const selectedQuestions = []
        for (let j = 0; i + j < flaggedQuestions.length && j < 4; j++ ) {
            selectedQuestions.push(<TouchableOpacity key={'flagged' + i + j} style={styles.submitbutton}>
                <Text style={styles.buttontext}>{flaggedQuestions[i + j].questionId}</Text>
            </TouchableOpacity>)
        }

        return selectedQuestions;
    }
    if (!isFlagged) {
        examQuestions.forEach((subject, index) => lessons.push( <View key={'subject' + index} style={styles.alternativeLayoutButtonContainer}>
            {currentSubject.subjectDesc === subject.subjectDesc ? 
            <TouchableOpacity style={[styles.activeBtn]}>
                <Text style={styles.buttontext}></Text>
            </TouchableOpacity> : <Text></Text>}
            <TouchableOpacity style={[styles.submitbutton, currentSubject.subjectDesc === subject.subjectDesc ? styles.selectedExamBtn : styles.examBtn]} onPress={() => onSubject(subject)}>
                <Text style={styles.buttontext}>{subject.displayName}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.submitbutton, styles.examBtn, styles.marksBtn]}>
                <Text style={styles.buttontext}>{currentSubject.subjectDesc === subject.subjectDesc ? currentQuestionId : 0}/{subject.questions.length}</Text>
            </TouchableOpacity>
        </View>))  
    } else if (isFlagged && questions) {
        const flaggedQuestions = questions.filter(question => question.flagged === true);
        for(let i = 0; i < flaggedQuestions.length; i = i + 4) {
            answers.push(<View key={'flagged' + i}><Text style={[styles.alternativeLayoutButtonContainer, styles.flaggedView]}>{selectFlaggedQuestions(flaggedQuestions, i)}</Text></View>);
        }
    } else {
        answers.push(<Text></Text>);
    }
    
        return (
            <View style={styles.container}>
                <MenuOverlay
                />
                <View style={[styles.menu, isFlagged ? styles.flaggedMenu : styles.lessonMenu]}>
                    {isFlagged ? 
                        <View>
                            <ScrollView>
                                <View style={{marginBottom: 20}}>
                                    <TouchableOpacity style={[styles.submitbutton, styles.headerBtn]}>
                                        <Text style={styles.buttontext}>{subject.displayName}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    {answers}
                                </View>
                            </ScrollView>
                        </View> 
                        : 
                        <View>
                            {lessons}
                        </View>
                    }
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
        backgroundColor: '#666562',
        opacity: 0.8,
        position : 'absolute',
        left: width - 230,
        top: -210,
        width : 200, 
        height : 150,
        paddingTop : 10,
        paddingLeft : 10,
        paddingRight : 10,
        paddingBottom : 10,
    },
    lessonMenu: {
        left: -5,
        top: -285,
        width : 250, 
        height : 300,
    },
    flaggedMenu: {
        right:10,
    },
    menuItem : {
        paddingTop : 10
    },
    alternativeLayoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    flaggedView: {
        width: 250,
    },
    submitbutton: {
        alignItems: 'center',
        alignContent: 'space-between',
        padding: 5,
        backgroundColor: '#FCB809',
        borderWidth: 0,
        borderRadius: 2,
        borderColor: '#FCB809',
        borderBottomWidth: 0,
        color: '#ffffff',
        height: 30,
        width: 32,
        shadowColor: '#FCB809',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    headerBtn: {
        backgroundColor: '#F8F8F8',
        borderColor: '#F8F8F8',
        width: 180,
        borderRadius: 10,
    },
    examBtn: {
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        shadowColor: '#ffffff',
        width: 170,
        borderRadius: 10,
    },
    selectedExamBtn: {
        backgroundColor: '#D4D4D4',
        borderColor: '#D4D4D4',
        shadowColor: '#D4D4D4',
        width: 170,
        borderRadius: 10,
    },
    activeBtn: {
        backgroundColor: '#6FCF97',
        borderColor: '#6FCF97',
        shadowColor: '#6FCF97',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginTop: 10
    },
    marksBtn: {
        width: 40,
        height: 30
    },
    buttontext: {
        color: '#000000',
        fontWeight: 'bold',
    },
});
