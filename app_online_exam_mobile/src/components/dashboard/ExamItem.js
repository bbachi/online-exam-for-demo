import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { isTodayWithinExamDates, isExamTimeWithin15Mins } from '../../util/DateUtil';
import {LinearGradient} from 'expo-linear-gradient';
import { LimitSvg, CalenderSvg, TimeSvg } from '../images'
import { useNavigation } from '@react-navigation/native';

function ExamItem({exam, index, onExamStart, navigation}) {
    
    const disabledButton = <button className="btn btn-primary ex-btn" disabled>Continue</button>

    const shouldEnableContinueBtn = exam.examType === '0' ? isExamTimeWithin15Mins(exam) : isTodayWithinExamDates(exam.examDate, exam.examEndDate);


    return (
       
        <View style={styles.alternativeLayoutButtonContainer}>
            <Text style={styles.titleWrapper}>
                <Text style={{fontSize: 20}}>{exam.examName}</Text> 
                <LinearGradient colors={['#F1AC12','#F1DD2C']} start={{ x: 0.2, y: 0.2 }} style={styles.linearGradient}>
                    <TouchableOpacity>
                        {exam.examType === '0' ? <Text style={styles.simultaneousButton}>Simultaneous</Text> : <Text></Text>}
                    </TouchableOpacity>
                </LinearGradient>
                <LimitSvg />
                <Text style={styles.dateWrapper}>
                    <CalenderSvg /> 
                    {exam.examType === '0' 
                        ? <Text>{exam.examDate} <TimeSvg /> {exam.startTime} - {exam.endTime}</Text>
                        : <Text>{exam.examDate} - {exam.examEndDate} </Text>
                    }
                </Text>
            </Text>
            {exam.purchased ? 
                <Text>
                    <TouchableOpacity onPress={() => onExamStart(exam)}  style={styles.submitbutton}>
                        <Text style={styles.buttontext}>Continue</Text>
                    </TouchableOpacity>
                </Text>
                :
                <Text style={{margin: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate("QuestionView")} style={[styles.submitbutton, styles.buyButton]}>
                        <Text style={styles.buttontext}>Buy</Text>
                    </TouchableOpacity>
                </Text>   
            }
            
        </View>
    );
  }
  
  export default ExamItem;


  const styles = StyleSheet.create({

    titleWrapper: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        width: '70%',
    },
    dateWrapper: {
        fontSize: 16,
        color: '#3D3D3D',
        opacity: 0.1
    },
    alternativeLayoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
    },
    submitbutton: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#4484FC',
        borderWidth: 0,
        borderRadius: 10,
        borderColor: '#4484FC',
        borderBottomWidth: 0,
        color: '#ffffff',
        height: 48,
        marginTop: 22,
        marginLeft: 100
    },
    buyButton: {
        backgroundColor: '#FFC71B',
        borderColor: '#FFC71B',
        height: 40,
        padding: 10,
        paddingRight: 20
    },
    simultaneousButton: {
        color: '#ffffff',
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: 5,
    },
    buttontext: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        color: '#ffffff',
    }
});



