import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Message({startTime}) {

    return (
        <View>
            <Text>The exam wil start at {startTime}, Please Wait!</Text>
            <Text>At {startTime}, you will be redirected to the test screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      }
});