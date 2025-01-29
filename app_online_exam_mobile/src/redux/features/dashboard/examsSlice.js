import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getExamsByUserId } from '../../../services/DashboardService'

const initialState = {
    userId: '',
    purchased: [],
    nonPurchased: [],
    status: 'idle',
    error: null
}

export const fetchExamsByUserId = createAsyncThunk('user/fetchExams', async (data) => {
  const response = await getExamsByUserId(data);
  return response
})

export const examsSlice = createSlice({
    name: 'exams',
    initialState,
    reducers: {
      exams: {
        reducer(state, action) {
        }
      }
    },
    extraReducers: {
      [fetchExamsByUserId.pending]: (state, action) => {
        state.status = 'loading'
      },
      [fetchExamsByUserId.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        if (action.payload.isDataAvailable && action.payload.result.exams) {
            const exams = action.payload.result.exams;
            state.purchased = exams.filter(exam => exam.purchased === true);
            state.nonPurchased = exams.filter(exam => exam.purchased === false);
          } else {
            state.purchased = [];
          }
      },
      [fetchExamsByUserId.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      }
    }
  })
  
  export const { exams } = examsSlice.actions
  
  export default examsSlice.reducer