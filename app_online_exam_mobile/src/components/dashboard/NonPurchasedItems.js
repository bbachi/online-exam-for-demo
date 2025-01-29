import React from 'react';
import { View, Text } from 'react-native';
import ExamItem from './ExamItem';
import NoExam from '../shared/NoExam';

export const NonPurchasedItems = ({nonPurchasedExams, selectedTab}) => {

    console.log("nonPurchasedExams:: ", nonPurchasedExams.length)

    if (nonPurchasedExams && nonPurchasedExams.length === 0) {
         const message = 'You do not have any exams to continue';
        return <View><NoExam message={message} /></View>;
    }

    const exams = []
    nonPurchasedExams.forEach(exam => exams.push(<View key={exam._id}><ExamItem exam={exam}/></View>))

    return <View>{exams}</View>

}