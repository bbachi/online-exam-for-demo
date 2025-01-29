import React from 'react';
import { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import Login from "../components/login/Login"
import AppContext from '../store/AppContext';
// redux
import { useSelector, useDispatch } from 'react-redux'
import { checkForUserProfile } from '../redux/features/user/userSlice'

export default function LoginContainer({ navigation }) {

    const appContext = useContext(AppContext);
    const dispatch = useDispatch();

    const userStatus = useSelector(state => state.user.userProfile.status)
    const status = useSelector(state => state.user.status)
    const userProfile = useSelector(state => state.user.userProfile)
    
    const onLogin = (userId, password) => {
        dispatch(checkForUserProfile({userId, password}))
    }

    useEffect(() => {
        if (userProfile.status) {
            navigation.navigate('Welcome')
        }
        appContext.setUserDetails(userProfile);
    }, [userStatus, userProfile])

    return (
        <View style={styles.container}>
            <LoginScreen>
                <Login onLogin={onLogin} status={status} userStatus={userStatus} />
            </LoginScreen>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      }
});