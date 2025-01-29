import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { getExamQuestionsByExamId, saveExamAnswers, sortQuestions } from '../../../services/ExamService'
import { REHYDRATE } from 'redux-persist'

const initialState = {
    examId: '',
    questions: [],
    status: 'idle',
    error: null
}

export const fetchExamQuestionsByExamId = createAsyncThunk('exam/examQuestions', async ({examId, shuffle}) => {
  const response = await getExamQuestionsByExamId({examId, shuffle});
  return response
})


export const saveExamAnswersByUserId = createAsyncThunk('exam/examAnswers', async (payload, thunkAPI) => {
  payload.subjects = thunkAPI.getState().examquestions.questions;
  const response = await saveExamAnswers(payload);
  return response
})



export const questionsSlice = createSlice({
    name: 'examquestions',
    initialState,
    reducers: {
        updateQuestionWithAnswer(state, action) {
            const { subjectDesc, questionId, answer } = action.payload
            const currentSubjectQuestions = state.questions.questions.find(subject => subject.subjectDesc === subjectDesc);
            if (currentSubjectQuestions && currentSubjectQuestions.questions.length > 0) {
              currentSubjectQuestions.questions.forEach(question => {
                if( question.questionId === questionId) {
                   question.answer = question.answer === answer ? "" : answer;
                   // question.answer = answer;
                }
              })
            }
            return state;
        },
        updateQuestionWithDuration(state, action) {
          console.log("Payload   ", action.payload)
          const { subjectDesc, questionId, duration } = action.payload
          const currentSubjectQuestions = state.questions.questions.find(subject => subject.subjectDesc === subjectDesc);
          if (currentSubjectQuestions && currentSubjectQuestions.questions.length > 0) {
            currentSubjectQuestions.questions.forEach(question => {
              if( question.questionId === questionId.toString()) {
                 question.duration = (question.duration === undefined ? 0 : question.duration) + duration;
              }
            })
          }
          return state;
        },
        flagQuestion(state, action) {
           const { subjectDesc, questionId, flagged } = action.payload
           const currentSubjectQuestions = state.questions.questions.find(subject => subject.subjectDesc === subjectDesc);
           currentSubjectQuestions.questions.forEach(question => {
            if( question.questionId === questionId) {
               question.flagged = question.flagged ? !question.flagged : flagged;
            }
          })
          return state;
        }

    },
    extraReducers: {
      [fetchExamQuestionsByExamId.pending]: (state, action) => {
        state.status = 'loading'
      },
      [fetchExamQuestionsByExamId.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        if (action.payload.isDataAvailable && action.payload.result) {
            const examQuestions = action.payload.result;
            state.questions = sortQuestions(examQuestions);
          } else {
            state.questions = [];
          }
      },
      [fetchExamQuestionsByExamId.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      },
      [saveExamAnswersByUserId.pending]: (state, action) => {
        state.status = 'loading'
      },
      [saveExamAnswersByUserId.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        if (action.payload.isDataAvailable && action.payload.result) {
            // const examQuestions = action.payload.result;
            // state.questions = examQuestions;
          } else {
            // state.questions = [];
          }
      },
      [saveExamAnswersByUserId.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      },
      [REHYDRATE] : (state) => {
         console.log("in rehydrate")
         const rehydrateState = {...state};

         console.log(current(rehydrateState.questions))
         console.log("in rehydrate")
      }
    },
    
  })

  export const getQuestionNumbers = (state) => {
    return state.examquestions.questions ? state.examquestions.questions : [];
  }
  
  export const { updateQuestionWithAnswer, flagQuestion, updateQuestionWithDuration } = questionsSlice.actions
  
  export default questionsSlice.reducer