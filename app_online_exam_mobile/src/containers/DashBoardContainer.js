import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import DashboardScreen from '../screens/DashboardScreen';
import { PurchasedItems } from '../components/dashboard/PurchasedItems';
import { NonPurchasedItems } from '../components/dashboard/NonPurchasedItems';
import Account from '../components/dashboard/account';
import Home from '../components/dashboard/home';
import AppContext from '../store/AppContext';
import { fetchExamsByUserId } from '../redux/features/dashboard/examsSlice'
import { useGetDataOnLoad } from '../hooks';
import _ from 'underscore'
import ExamList from '../components/dashboard/exam-list';
import DashboardReportApp from '../components/dashboard/report';

export default function DashboardContainer({ navigation }) {

    const appContext = useContext(AppContext);
    const [selectedTab, setSelectedTab] = useState('PURCHASED');
    const [seletedDashboardTab, setSeletedDashboardTab] = useState('Exam');
  
    const onChangeTab = (tabName) => {
      setSelectedTab(tabName);
    }
  
    const onExamStart = (exam) => {
        appContext.addCurrentExamToUserDetails(exam);
        if (exam.examType === "1") {
          navigation.navigate("QuestionView");
        } else {
          setSeletedDashboardTab('ExamView');
        }
    }
  
    const { userId } = _.isEmpty(appContext.userDetails.userId) ? "" : appContext.userDetails;
  
    console.log("userId  ", userId)
  
    const exams = useGetDataOnLoad(fetchExamsByUserId, {userId, purchased: true}, "exams");
  
    console.log("exams ", exams);

    const handleDashboard = (value) => {
      setSeletedDashboardTab(value);
    }
  
    const examItems = (selectedTab) => {
        
      return (
        <>
          {selectedTab === 'PURCHASED' ? 
            <View style={{height:'80%'}}><ScrollView><PurchasedItems navigation={navigation} onExamStart={onExamStart} purchasedExams={exams.purchased} selectedTab={selectedTab} /></ScrollView></View>
              : 
             <View  style={{height:'80%'}}><ScrollView><NonPurchasedItems navigation={navigation} nonPurchasedExams={exams.nonPurchased} selectedTab={selectedTab} /></ScrollView></View>
          }
        </>
      )
    }

    return (
        <View style={styles.container}>
            <DashboardScreen onSelectLanguage={handleDashboard}>
             { seletedDashboardTab == 'Home' ?
                  <Home userId={userId}/>
                : seletedDashboardTab == 'Exam' ? 
                      <View><View style={styles.alternativeLayoutButtonContainer}>
                      <TouchableOpacity style={selectedTab === 'PURCHASED' ? [styles.headerBtn , styles.headerInactiveBtn] : [styles.headerBtn]} onPress={(e) => onChangeTab('PURCHASED')}>
                          <Text style={styles.purchaseButtonText}>Purchased</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={selectedTab === 'NON-PURCHASED' ? [styles.headerBtn , styles.headerInactiveBtn] : [styles.headerBtn]} onPress={(e) => onChangeTab('NON-PURCHASED')}>
                          <Text style={styles.purchaseButtonText}>Non-Purchased</Text>
                      </TouchableOpacity>
                  </View>
                  {examItems(selectedTab)}</View>  
                : seletedDashboardTab == 'Report' ? <ExamList onSelectLanguage={handleDashboard}></ExamList> 
                : seletedDashboardTab == 'ReportView' ? <DashboardReportApp onSelectLanguage={handleDashboard}></DashboardReportApp> 
                : seletedDashboardTab == 'ExamView' ? <DashboardReportApp onSelectLanguage={handleDashboard}></DashboardReportApp> : <Account userId={userId}/> }
            </DashboardScreen>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      headerWrapper: {
        height: '90%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerBtn: {
        alignItems: 'center',
        alignContent: 'space-between',
        padding: 10,
        backgroundColor: '#ffffff',
        borderWidth: 0,
        borderRadius: 10,
        borderColor: '#ffffff',
        borderBottomWidth: 0,
        color: '#ffffff',
        height: 48,
        marginTop: 22,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.9,
        shadowRadius: 1,
        elevation: 3,
        textTransform: 'uppercase',
        flexBasis: '45%',
    },
    headerInactiveBtn: {
        backgroundColor: '#A5A5A5',
    },
    alternativeLayoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
    },
    alternativeLayoutInactiveButtonContainer: {
        backgroundColor: '#D6D5D5',
        padding: 10,
    },
    purchaseButtonText: {
        textTransform: 'uppercase',
        fontSize: 14,
    }
});