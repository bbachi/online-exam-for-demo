import React from 'react';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AppContext from '../store/AppContext';
import RemainingTime from '../components/timer/remaining-time';
import Message from '../components/timer/message-time';

export default function TimerContainer() {

  const appContext = useContext(AppContext);

  const { userId, ongoingExam } = appContext.userDetails;

  const hoursMinSecs = getHourMinSecs(ongoingExam)

    return (
        <View style={styles.container}>
            <RemainingTime hoursMinSecs={hoursMinSecs} />
            <Message startTime={ongoingExam.startTime}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      }
});