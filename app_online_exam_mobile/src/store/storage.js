import AsyncStorage from '@react-native-community/async-storage'

export const saveItem = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

export const getItem = (key) => undefined !== AsyncStorage.getItem(key) ? JSON.parse(AsyncStorage.getItem(key)): "";

export const clearStorage = () => AsyncStorage.clear();

export const saveReduxState = (state) => {

    try{
        const serializedState = JSON.stringify(state);
        AsyncStorage.setItem('reduxState', serializedState);
    } catch (err) {
        console.log(`Error Occured while loading redux state `, err);
    }
    
}

export const loadReduxState = () => {

    try{
        const serializedState = AsyncStorage.getItem('reduxState');
        if (serializedState === 'undefined' || serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log(`Error Occured while loading redux state `, err);
    }
    
}