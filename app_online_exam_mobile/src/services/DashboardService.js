import { postData } from './BaseService'

export async function getExamsByUserId(data) {
    const url = `api/${data.userId}/exams`
    return await postData(url ,{examType: data.examType});
}