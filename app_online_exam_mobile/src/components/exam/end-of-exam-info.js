import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ExamScreen from '../../screens/ExamScreen';
import { DataTable } from 'react-native-paper';
import {SvgXml} from 'react-native-svg';

const timeSvg = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.9991 18.1667C4.46772 18.1069 0.808823 14.448 0.749098 9.91666C0.808823 5.38528 4.46772 1.72639 8.9991 1.66666C13.5305 1.72639 17.1894 5.38528 17.2491 9.91666C17.1894 14.448 13.5305 18.1069 8.9991 18.1667ZM8.9991 3.5C5.47467 3.5464 2.62883 6.39223 2.58243 9.91666C2.62883 13.4411 5.47467 16.2869 8.9991 16.3333C12.5235 16.2869 15.3694 13.4411 15.4158 9.91666C15.3694 6.39223 12.5235 3.5464 8.9991 3.5ZM13.5824 10.8333H8.08243V5.33333H9.91576V9H13.5824V10.8333ZM16.6001 4.149L13.8418 1.399L15.1334 0.100079L17.8926 2.85008L16.6001 4.14808V4.149ZM1.39718 4.149L0.100098 2.85008L2.84185 0.100079L4.13893 1.399L1.39901 4.149H1.39718Z" fill="#4F4F4F"/>
</svg>
`;


export default function EndOfExamInfo({ navigation, subjects, onPrevClick, onNextModal }) {
    const answers = [];
    const setNextView = () => {
        onNextModal('DONE');
    }
    const setPrevView = () => {
        onPrevClick('EndOfExamIntimation');
    }
    subjects?.forEach(subject => {
        const examQuestions = subject?.questions;
        const answered = examQuestions?.filter(question => question.answer);
        const unanswered = examQuestions?.filter(question => question.answer === '' || !question.answer);
    
        answers.push(<DataTable.Row key={subject?.displayName} style={styles.rowStyle}>
            <DataTable.Cell>{subject?.displayName}</DataTable.Cell>
            <DataTable.Cell style={styles.dataCell} numeric>{answered?.length}</DataTable.Cell>
            <DataTable.Cell style={styles.dataCell} numeric>{unanswered?.length}</DataTable.Cell>
        </DataTable.Row>)
    })
        return (
            <View>
                <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                    <View style={styles.header}>
                        <View style={{alignItems: 'center', textAlign:'center', marginTop: 10, paddingLeft:30, paddingRight: 30, fontSize: 14}}>
                            <Image source={require('../images/Info.png')}/>
                            <Text style={{color: '#2BA4FC', fontSize: 24}}>Information</Text>
                            <View style={{paddingTop: 20, paddingBottom: 30}}>                            
                                <Text>Your exam information is as follows. You can still return or exit the exam.</Text>
                            </View>
                        </View>
                        <View style={{paddingBottom: 30}}>
                            <DataTable style={styles.tableWrapper}>
                                <DataTable.Header style={styles.headerStyle}>
                                    <DataTable.Title></DataTable.Title>
                                    <DataTable.Title style={styles.dataCell} numeric>
                                        <TouchableOpacity style={[styles.submitbutton, styles.flaggedButton]}>
                                            <Text style={styles.buttontext}>Answered</Text>
                                        </TouchableOpacity>
                                    </DataTable.Title>
                                    <DataTable.Title style={styles.dataCell} numeric>
                                        <TouchableOpacity style={[styles.submitbutton, styles.resultBtn]}>
                                            <Text style={[styles.buttontext, styles.navigateBtnText]}>Null</Text>
                                        </TouchableOpacity>
                                    </DataTable.Title>
                                </DataTable.Header>
                                {answers}
                            </DataTable>                            
                        </View>
                    </View>
                </View>
                    <View style={[styles.alternativeLayoutButtonContainer, styles.footerWrapper]}>
                        <TouchableOpacity style={[styles.submitbutton, styles.navigateBtn]} onPress={() => setPrevView()}>
                            <Text style={[styles.buttontext, styles.navigateBtnText]}>Back to the Exam</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.submitbutton, styles.navigateBtn]} onPress={() => setNextView()}>
                            <Text style={[styles.buttontext, styles.navigateBtnText]}>Further</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
}

const styles = StyleSheet.create({
    examWrapper: {
        flex: 1,
    },
    header: {
        height: '85%',
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
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
    resultBtn: {
        backgroundColor: '#2BA4FC',
        width: 70,
        borderRadius: 5,
    },
    navigateBtn: {
        backgroundColor: '#2BA4FC',
        width: 150,
        borderRadius: 5,
    },
    navigateBtnText: {
        color: '#ffffff',
        fontSize: 14
    },
    footerWrapper: {
        paddingLeft: 20,
        paddingRight: 20
    },
    rowStyle: {
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },
    headerStyle: {
        borderBottomWidth: 0,
    },
    dataCell: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
