import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import {SvgXml} from 'react-native-svg';

const listItem1 = `<svg width="361" height="157" viewBox="0 0 361 157" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="361" height="157" rx="10" fill="#C4C4C4" fill-opacity="0.1"/>
</svg>
`;

const listItem2 = `<svg width="361" height="157" viewBox="0 0 361 157" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="361" height="157" rx="10" fill="#C4C4C4" fill-opacity="0.1"/>
</svg>`;

const listItem3 = `<svg width="361" height="157" viewBox="0 0 361 157" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="361" height="157" rx="10" fill="#C4C4C4" fill-opacity="0.1"/>
</svg>`;

const Home = ({userId}) => {
    const [notificationAllowed, setNotification] = useState(true);

    const handleNotifications = (isAllowed) => {
        alert(isAllowed);
        setNotification(false);
    }

  return (
    <View style={styles.container}>
       {/* {notificationAllowed  ? <NotificationMenu handleNotifications={handleNotifications}/>:<Text></Text>} */}
        <ImageBackground  source={require('../images/ThankYouBackground.png')} style={styles.image}>
            <View style={styles.headerWrapper}><Text style={styles.headerText}>TYT 3 IS OPEN NOW AND OPEN FOR 1 WEEK!</Text></View>
        </ImageBackground>
        <ImageBackground  source={require('../images/ThankYouBackground.png')} style={styles.image}>
            <View style={styles.headerWrapper}><Text style={styles.headerText}>TYT 2 REPORTS ARE ANNOUNCED!</Text></View>
        </ImageBackground>
        <ImageBackground  source={require('../images/ThankYouBackground.png')} style={styles.image}>
            <View style={styles.headerWrapper}><Text style={styles.headerText}>TYT 3 IS OPEN NOW AND OPEN FOR 1 WEEK!</Text></View>
        </ImageBackground>
    </View>
  );

}

export default Home;

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    image: {
        flex:1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        height: 150,
        marginTop: 20,
    },
    headerWrapper: {
        fontWeight: '500',
        fontSize: 25,
    },
    headerText: {
        fontWeight: '500',
        fontSize: 25,
    },
});