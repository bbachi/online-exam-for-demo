import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import examsReducer from './features/dashboard/examsSlice'
import surveyReducer from './features/survey/surveySlice'
import questionReducer from './features/examquestions/questionsSlice'
import examStatusReducer from './features/examquestions/examStatusSlice'
import { loadReduxState } from '../store/storage';
// persister changes
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import AsyncStorage from '@react-native-community/async-storage'

// const preloadedState = loadReduxState('reduxState')

const reducers = combineReducers({
    user: userReducer,
    exams: examsReducer,
    survey: surveyReducer,
    examquestions: questionReducer,
    examStatus: examStatusReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['user'], // user will not be persisted
  // whitelist: ['user'], // only user will be persisted,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})