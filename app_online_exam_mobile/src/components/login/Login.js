import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { LOGIN_FAILED_MESSAGE } from '../../util/AppConstants';

const LoginFailureAlert = () =>
    
    Alert.alert(
      "Login Failure",
      "User Id and Password are Incorrect",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

export default function Login({onLogin, status, userStatus}) {

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    return (
       <LinearGradient colors={['#FFD85F','#FFCE38']} style={styles.linearGradient}>
            {userStatus === false ? <Text style={styles.loginError}>User Id and Password are Incorrect</Text> : <Text></Text>}
            <View style={styles.registerform}>
                <TextInput style={styles.textinput} onChangeText={text => setUserId(text)} placeholder="User ID"></TextInput>
                <TextInput style={styles.textinput} onChangeText={text => setPassword(text)} placeholder="Password" underlineColorAndroid={'transparent'} secureTextEntry={true}></TextInput>
                <Text style={styles.forgottext}>I forgot my password!</Text>
                <LinearGradient colors={['#FFCE38','#FFFFFF']} start={{ x: 0.9, y: 0.5 }} style={styles.submitBtnLinearGradient}>
                    <TouchableOpacity style={styles.submitbutton} onPress={() => onLogin(userId, password)}>
                        <Text style={styles.buttontext}>{status === 'loading' ? 'Loading...' : 'Login' }</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <Text style={styles.forgottext}>Don't have an account? Register</Text>
            </View>
        </LinearGradient>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
    registerform: {
        // alignSelf: 'stretch',
        paddingLeft: 20,
        paddingRight: 20
    },
    forgottext: {
        textAlign: 'center',
        color: '#ffffff',
        // paddingTop: 10,
        paddingBottom: 30,
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        color: '#BABABA',
        marginBottom: 30,
        borderColor: '#f8f8f8',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 5,
        width: 326
    },
    submitbutton: {
        alignItems: 'center',
        padding: 20,
    },
    buttontext: {
        color: '#fff',
        fontWeight: 'bold'
    },
    submitBtnLinearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    loginError: {
        color: "red",
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        width: 326,
        marginBottom: 10
    }
});
