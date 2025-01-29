import React, { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import ExamScreen from '../../screens/ExamScreen';
import Footer from '../instructions/footer';
import AppContext from '../../store/AppContext';
import { fetchQuestionsByExamId, saveSurveyAnswers } from '../../redux/features/survey/surveySlice';
// import { isExamTimeWithin15Mins } from '../util/DateUtil';
import NoExam from '../shared/NoExam';
import TextAreaQuestion from '../shared/TextAreaQuestion';
import RadioQuestion from '../shared/RadioQuestion';

import _ from 'underscore';

export default function Survey({ navigation }) {

    const appContext = useContext(AppContext);
    const [question1, setValue] = React.useState(null);
    const [question2, setQuestion2] = React.useState(null);

    const dispatch = useDispatch()
    const squestions = useSelector(state => state.survey.surveyQuestions);
    const [ surveyAnswers, setSurveyAnswers ] = useState([]);

    const { examId } = _.isEmpty(appContext.userDetails.userId) ? "" : appContext.userDetails.ongoingExam
    const { userId } = _.isEmpty(appContext.userDetails.userId) ? "" : appContext.userDetails;

    const [currentExamModal, setCurrentExamModal] = useState();
    const [show, setShow] = useState(false);
    

    const handleClose = () => setShow(false);
    // Event Handlers Close

    useEffect(() => {
        dispatch(fetchQuestionsByExamId(examId))
    }, [])

    useEffect(() => {
        // setCurrentExamModal(<CongratulationModal onNextModal={onNextModal}/>)
        setShow(true)
    }, []);

    
    const onAnswer = (answer, questionId) => {
        const answers = surveyAnswers;
        const answerFound = answers.find(answer => answer.questionId === questionId);
        if (answerFound) {
            answerFound.answer = answer;
        } else {
            answers.push({questionId, answer});
        }
        setSurveyAnswers(answers);
    }

    const createQuestions = (question, index) => {
        
        const result = [];
        if (question.questionType === 'radio') {
            result.push(<RadioQuestion key={index} surveyQuestion={question} index={index+1} onAnswer={onAnswer} />)
        } else if (question.questionType === 'textarea') {
            result.push(<TextAreaQuestion key={index} surveyQuestion={question} index={index+1} onAnswer={onAnswer} />)
        }
        return result;
    }

    const onCompleteSurvey = (modelName) => {
        if (squestions) {
            const surveyId = squestions.surveyId;
            const examId = squestions.examId;
            const sAnswers = {
                surveyId, examId, userId, surveyAnswers
            }
            dispatch(saveSurveyAnswers(sAnswers))
        }
        navigation.navigate('EndOfExam');
    }

    let questions = [];
    if(squestions && squestions.questions) {
        questions = squestions.questions.map((question, index) => createQuestions(question, index))
    } else {
        questions = <NoExam message="No Survey Questions Available" />
    }

        return (
            <View style={styles.examWrapper}>
                <ExamScreen>
                    <View style={styles.header}>
                        {questions}
                    </View>
                    <TouchableOpacity onPress={() => onCompleteSurvey('SURVEY_DONE')}><Footer /></TouchableOpacity>
                </ExamScreen>
            </View>
        );
}

const styles = StyleSheet.create({
    examWrapper: {
        flex: 1,
    },
    header: {
        height: '80%',
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
