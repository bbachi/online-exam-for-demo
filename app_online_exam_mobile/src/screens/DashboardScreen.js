import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { HomeSvg, MyExamSvg, MyReportsSvg } from '../components/images';
import Icon from 'react-native-vector-icons/Ionicons';

function DashboardScreen(props) {
  const handleDashboard = (value) => {
    props.onSelectLanguage(value);            
}
    return (
      <View style={styles.examListWrapper}>
          <View style={styles.headerWrapper}>
            {props.children}
          </View>
          <View style={styles.footerWrapper}>
            <Text>
                <TouchableOpacity style={styles.iconWrapper} onPress={() => handleDashboard('Home')}>
                    <HomeSvg />
                    <Text style={styles.myHomeBtn}>  Home Page</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper} onPress={() => handleDashboard('Exam')}>
                    <MyExamSvg />
                    <Text style={styles.myHomeBtn}>  My Exams</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper} onPress={() => handleDashboard('Report')}>
                    <MyReportsSvg />
                    <Text style={styles.myHomeBtn}>  My Reports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper} onPress={() => handleDashboard('Account')}>
                  <Icon style={[{color: '#ffffff'}]} name={'ios-person'} />
                  <Text style={styles.myHomeBtn}>  My Account</Text>
                </TouchableOpacity>
            </Text>
        </View>
      </View>
    );
  }
  
export default DashboardScreen;

const styles = StyleSheet.create({
  examListWrapper: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#ffffff',
      textTransform: 'uppercase',
    },
    footerWrapper: {
      backgroundColor: '#FFC71B',
      width: '100%',
      alignItems: 'center',
      fontSize:12,
      justifyContent: 'center',
      paddingTop:10,
      paddingBottom: 10,
    },
    iconWrapper: {
      alignItems: 'center',
      alignContent: 'center',

    },
    myHomeBtn: {
      fontSize:14,
      color: '#ffffff',
      paddingRight: 10,
    },
    headerWrapper: {
      height: '90%',
      paddingLeft: 20,
      paddingRight: 20,
  },
});