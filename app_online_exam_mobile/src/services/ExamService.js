import { postData } from './BaseService'
import { sortByAsc } from '../util/CommonUtil'

const createExamAnswersForAPI = (userId, examId, subjects) => {

    const examAnswers = subjects.map(subject => {
        const subjectDesc = subject.subjectDesc;
        const answers = [];
        subject.questions.forEach(ques => {
            answers.push({questionId: ques.questionId, answer: ques.answer, flagged: ques.flagged === true, duration: ques.duration ? ques.duration : ''})
        })
        return {subjectDesc, answers}
    })
    const answers = {userId, examId, examAnswers}
    return answers
}

export const sortQuestions = (subjects) => {
    if(subjects?.questions?.length > 0) {
        subjects?.questions?.forEach(subject => {
            subject.questions.sort((a, b) => sortByAsc(a.questionId, b.questionId))
        });
    }
    return subjects;
}

export async function getExamQuestionsByExamId({examId, shuffle}) {
    const url = `api/exam/questions`
    return await postData(url, {exam:{examId, shuffle}});
}

export async function saveExamAnswers(payload) {
    const url = `api/exam/answers`
    const examAnswers = createExamAnswersForAPI(payload.userId, payload.examId, payload.subjects)
    return await postData(url, {examAnswers});
}

