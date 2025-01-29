import React from 'react';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AppContext from '../store/AppContext';
import RemainingTime from './message-time';
import ExamCountDown from '../shared/ExamCountDown';

export default function RemainingTime() {

  const appContext = useContext(AppContext);

  const { userId, ongoingExam } = appContext.userDetails;

  const hoursMinSecs = getHourMinSecs(ongoingExam)

    return (
        <View>
           <ExamCountDown hoursMinSecs={hoursMinSecs}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      }
});