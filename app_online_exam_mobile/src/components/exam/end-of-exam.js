import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground  } from 'react-native';
import { useContext } from 'react';
import { clearStorage } from '../../store/storage';
import AppContext from '../../store/AppContext';
import { useDispatch } from 'react-redux';
import { clearUserProfile } from '../../redux/features/user/userSlice';

export default function EndOfExam({navigation}) {

    const appContext = useContext(AppContext);
    const dispatch = useDispatch();

    const onSignOut = () => {
        // Clearing Local Storage
        clearStorage();

        // Clearing the user details
        appContext.setUserDetails(null);
        dispatch(clearUserProfile());
        navigation.navigate('Register');

    }
    return (
        <View style={styles.instructionsWrapper}>
            <ImageBackground  source={require('../images/ThankYouBackground.png')} style={styles.image}>
                <View style={styles.bodyWrapper}>
                    <View style={styles.header}>
                        <Text style={styles.welcometext}>
                            Thank you very much for your participation in the survey.
                        </Text>
                        <Text style={styles.welcometext}>
                            Your thoughts are very valuable to us. For better experience your every opinion will be taken into consideration.
                        </Text>
                    </View>
               </View>
               <View style={[styles.footerWrapper]}>
                    <TouchableOpacity style={[styles.submitbutton]}>
                            <Text style={[styles.buttontext]} onPress={() => onSignOut()} >Sign Out</Text>
                    </TouchableOpacity>
               </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    footerWrapper: {
        alignSelf: 'flex-end',
        marginTop: 20,
   },
   instructionsWrapper: {
        flex: 1,
    },
    bodyWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 80,
        paddingBottom: 20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    header: {
        height: '85%',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 1,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeHeaderText: {
        paddingBottom: 48,
        fontSize: 40,
        fontWeight: 'normal'
    },
    welcometext: {
        textAlign: 'center',
        lineHeight: 22,
        fontSize: 18,
        color: '#000000',
        opacity: 0.6,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 30,
    },
    submitbutton: {
        alignItems: 'center',
        alignContent: 'space-between',
        padding: 5,
        backgroundColor: '#FCC12B',
        borderWidth: 0,
        borderRadius: 5,
        borderColor: '#FCC12B',
        borderBottomWidth: 0,
        color: '#ffffff',
        height: 45,
        width: 150,
        shadowColor: '#FCC12B',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0,
        shadowRadius: 1,
        elevation: 3,
        textTransform: 'uppercase',
    },
    buttontext: {
        color: '#ffffff',
        fontWeight: 'bold',
        paddingTop: 8,
        fontSize: 14,
    },
    footerWrapper: {
        alignItems: 'center'
    },
});
