import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { updateExamStatus } from '../../../services/LoginService'

const initialState = { 
  examStatus: false,
  status: 'idle',
  error: null
}

export const updateExamStatusForUser = createAsyncThunk('user/update/examStatus', async (data) => {
  const response = await updateExamStatus(data);
  return response
})

export const examStatusSlice = createSlice({
    name: 'examStatus',
    initialState,
    reducers: {
      login: {
        reducer(state, action) {
  
        }
      }
    },
    extraReducers: {
        [updateExamStatusForUser.pending]: (state, action) => {
            state.status = 'loading'
        },
        [updateExamStatusForUser.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            if (action.payload.isDataAvailable && action.payload.result) {
                state.examStatus = (action.payload.result.result.nModified > 0);
            } else {
                state.examStatus = false;
            }
        },
        [updateExamStatusForUser.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
  })
  
  export default examStatusSlice.reducer