import React, { useState, useContext, useEffect } from 'react';
import {TimeSvg} from '../images'; 
import ExamCountDown from '../shared/ExamCountDown';
import { getRemainingTime } from '../../util/DateUtil';
import { StyleSheet, View, Text, Input } from 'react-native';
import {SvgXml} from 'react-native-svg';

const timeSvg = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.9991 18.1667C4.46772 18.1069 0.808823 14.448 0.749098 9.91666C0.808823 5.38528 4.46772 1.72639 8.9991 1.66666C13.5305 1.72639 17.1894 5.38528 17.2491 9.91666C17.1894 14.448 13.5305 18.1069 8.9991 18.1667ZM8.9991 3.5C5.47467 3.5464 2.62883 6.39223 2.58243 9.91666C2.62883 13.4411 5.47467 16.2869 8.9991 16.3333C12.5235 16.2869 15.3694 13.4411 15.4158 9.91666C15.3694 6.39223 12.5235 3.5464 8.9991 3.5ZM13.5824 10.8333H8.08243V5.33333H9.91576V9H13.5824V10.8333ZM16.6001 4.149L13.8418 1.399L15.1334 0.100079L17.8926 2.85008L16.6001 4.14808V4.149ZM1.39718 4.149L0.100098 2.85008L2.84185 0.100079L4.13893 1.399L1.39901 4.149H1.39718Z" fill="#F2C94C"/>
</svg>`;

const endTimeSvg = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.9991 18.1667C4.46772 18.1069 0.808823 14.448 0.749098 9.91666C0.808823 5.38528 4.46772 1.72639 8.9991 1.66666C13.5305 1.72639 17.1894 5.38528 17.2491 9.91666C17.1894 14.448 13.5305 18.1069 8.9991 18.1667ZM8.9991 3.5C5.47467 3.5464 2.62883 6.39223 2.58243 9.91666C2.62883 13.4411 5.47467 16.2869 8.9991 16.3333C12.5235 16.2869 15.3694 13.4411 15.4158 9.91666C15.3694 6.39223 12.5235 3.5464 8.9991 3.5ZM13.5824 10.8333H8.08243V5.33333H9.91576V9H13.5824V10.8333ZM16.6001 4.149L13.8418 1.399L15.1334 0.100079L17.8926 2.85008L16.6001 4.14808V4.149ZM1.39718 4.149L0.100098 2.85008L2.84185 0.100079L4.13893 1.399L1.39901 4.149H1.39718Z" fill="#4F4F4F"/>
</svg>`;

const ExamTimer = ({ongoingExam, showTimer, onToggleTimer, examView}) => {

    // if(ongoingExam?.examType === "1") {
    //    return null;
    // }
    const remainingTime = getRemainingTime(ongoingExam);

    return (
      <View>
           {showTimer ? <Text><Text>{examView === 'questionView' ? <SvgXml xml={timeSvg} /> : <SvgXml xml={endTimeSvg} />} </Text>
            <ExamCountDown hoursMinSecs={remainingTime} examView={examView}/></Text>: <Text></Text>}
      </View>
    );
  }
  
  export default ExamTimer;