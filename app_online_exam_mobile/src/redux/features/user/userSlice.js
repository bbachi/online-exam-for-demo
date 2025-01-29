import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userLogin } from '../../../services/LoginService'
import _ from 'underscore';

const initialState = { 
  userProfile: {
    userId: '',
    status: null,
    currentExamId: ''
  },
  status: 'idle',
  error: null
}

export const checkForUserProfile = createAsyncThunk('user/checkuser', async (data) => {
  let response = null;
  if (_.isEmpty(data.userId) || _.isEmpty(data.password)) {
    let message = "";
    if (_.isEmpty(data.userId)) message = "User Id is Empty";
    if (_.isEmpty(data.password)) message = "Password is Empty";
    response = {result: {status: false, message}}
  } else {
    response = await userLogin(data);
  }
  return response
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      clearUserProfile(state, action) {
          state.userProfile = {};
      },
      login: {
        reducer(state, action) {
        },
        prepare(userId, password) {
          return {
            payload: {
              user: {
                userId,
                password
              }
            }
          }
        }
      }
    },
    extraReducers: {
      [checkForUserProfile.pending]: (state, action) => {
        state.status = 'loading'
      },
      [checkForUserProfile.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        if (action.payload.isDataAvailable) {
          state.userProfile.status = action.payload.result.status;
          state.userProfile.userId = action.payload.result.userId;
        } else {
          state.userProfile.status = false;
        }
      },
      [checkForUserProfile.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      },
    }
  })

  export const getUserId = (state) => {
    console.log('state  ', state)
    return state.user.userProfile ? state.user.userProfile.userId : '';
  }

  export const getCurrentExamId = (state) => {
    console.log('state  ', state)
    return state.user.userProfile ? state.user.userProfile.currentExamId : '';
  }
  
  export const { login, clearUserProfile } = userSlice.actions
  
  export default userSlice.reducer