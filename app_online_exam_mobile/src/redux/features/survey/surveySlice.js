import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getQuestionsByExamId, postSurveyAnswers } from '../../../services/SurveyService'

const initialState = {
    examId: '10',
    surveyQuestions: {},
    status: 'idle',
    error: null
}

export const fetchQuestionsByExamId = createAsyncThunk('exam/surveyQuestions', async (examId) => {
  const response = await getQuestionsByExamId(examId);
  return response
})

export const saveSurveyAnswers = createAsyncThunk('exam/surveyAnswers', async (surveyAnswers) => {
    const response = await postSurveyAnswers(surveyAnswers);
    return response
  })

export const surveyQuestions = (state) => state.surveyQuestions;

export const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
      squestions: {
        reducer(state, action) {
        }
      }
    },
    extraReducers: {
      [fetchQuestionsByExamId.pending]: (state, action) => {
        state.status = 'loading'
      },
      [fetchQuestionsByExamId.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        if (action.payload.isDataAvailable && action.payload.result.surveyQuestions) {
            const surveyQuestions = {...action.payload.result.surveyQuestions};
            state.surveyQuestions = surveyQuestions[0];
          } else {
            state.surveyQuestions = [];
          }
      },
      [fetchQuestionsByExamId.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      }
    },
    
  })
  
  export const { squestions } = surveySlice.actions
  
  export default surveySlice.reducer