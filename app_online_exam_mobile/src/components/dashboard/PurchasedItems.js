import React from 'react';
import { Text, View } from 'react-native';
import ExamItem from './ExamItem';
import NoExam from '../shared/NoExam';

export const PurchasedItems = ({onExamStart, purchasedExams, selectedTab, navigation}) => {
    
    console.log("in PurchasedItems")
    if (purchasedExams && purchasedExams.length === 0) {
        const message = 'You do not have any exams to continue';
        return <View><NoExam message={message} /></View>;
    }
    const exams = [];
    purchasedExams.forEach((exam, index) => exams.push(<View key={exam._id}><ExamItem navigation={navigation} onExamStart={onExamStart} index={index} exam={exam}/></View>))
    
    return <View>{exams}</View>
    
}