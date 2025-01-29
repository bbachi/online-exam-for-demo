import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {SvgXml} from 'react-native-svg';

const listItem = `<svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11.5L0.25 22.3253V0.674683L19 11.5Z" fill="#C4C4C4"/>
</svg>`;

function Account({userId}) {
  
  return (
    <View>
        <View style={styles.headerWrapper}>
            <Text style={{fontSize: 20}}>My Account</Text>
        </View>
        <Text style={styles.headerText}>Hello dear student,</Text>
        <Text style={styles.userDetails}>User ID: {userId}</Text>
        <Text style={styles.changePassword}><SvgXml style={{paddingRight: 10}} xml={listItem} /><Text>Change my password</Text></Text>
    </View>
  );

}

export default Account;

const styles = StyleSheet.create({
  headerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#F9F9F9',
    paddingBottom: 10,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '300',
    opacity: 0.5,
    marginBottom: 20,
  },
  userDetails: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
  changePassword: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});