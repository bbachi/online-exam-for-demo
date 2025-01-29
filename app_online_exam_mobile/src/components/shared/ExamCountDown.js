import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ExamCountDown = ({hoursMinSecs, examView}) => {

    const { hours = 1, minutes = 25, seconds = 5 } = hoursMinSecs;
    const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
    

    const tick = () => {
   
        if (h === 0 && m === 0 && s === 0) 
        setTime([0, 0, 0]);
        else if (m === 0 && s === 0) {
          setTime([h - 1, 59, 59]);
        } else if (s === 0) {
          setTime([h, m - 1, 59]);
        } else {
          setTime([h, m, s - 1]);
        }
      };
      React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
      });

      

      return (
        <View>
          <Text style={examView==='questionView' ? styles.timerText : styles.endTimerText}>{`${h.toString().padStart(2, '0')}|${m
            .toString()
            .padStart(2, '0')}`} <Text style={{fontSize: 20}}>{`${s.toString().padStart(2, '0')}`}</Text></Text> 
           
        </View>
      );
}

export default ExamCountDown;

const styles = StyleSheet.create({
  timerText: {
    color:'orange',
    letterSpacing: 2,
    fontSize: 20,
  },
  endTimerText: {
    color:'#7E7E7E',
    letterSpacing: 2,
    fontSize: 20,
  }
});

