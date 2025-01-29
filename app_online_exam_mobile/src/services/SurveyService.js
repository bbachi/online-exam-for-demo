import { getData, postData } from './BaseService'

export async function getQuestionsByExamId(examId) {
    const url = `api/exam/${examId}/survey/questions`
    return await getData(url);
}

export async function postSurveyAnswers(surveyAnswers) {
    const url = `api/exam/survey/answers`
    return await postData(url, {surveyAnswers});
}