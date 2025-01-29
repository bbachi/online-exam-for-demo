import React from 'react';
import { StyleSheet, View} from 'react-native';

function LoginScreen({children}) {

    return (
      <View style={styles.container}>
                {children}
        </View>
    );
  }
  
  export default LoginScreen;

  const styles = StyleSheet.create({
    container: {
        flex: 1
      }
});