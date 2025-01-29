import React from 'react';
import { Text, View, Image } from 'react-native';

export default function NoExam({message}) {

    return (
        <View>
         <Text>No Exam
            <Image source={require('../images/noexam.png')}/>
            <Text>{message}</Text>
         </Text>
       </View>
    )
}
