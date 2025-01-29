import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/routes/exam-routes';
import { AppProvider } from './src/store/AppContext';
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App ()  {
    return (
      <AppProvider>
        <Provider store={store}>
          <View style={styles.container}>
            <Navigator />
          </View>
        </Provider>
      </AppProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
