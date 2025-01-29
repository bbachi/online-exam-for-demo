import React from 'react';
import { StyleSheet, View } from 'react-native';

function ExamScreen({children}) {

    return (
      <View style={styles.examWrapper}>
          {children}
      </View>
    );
  }
  
export default ExamScreen;

const styles = StyleSheet.create({
  examWrapper: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#ffffff',
      textTransform: 'uppercase',
  },
});