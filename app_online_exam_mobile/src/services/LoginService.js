import { postData } from './BaseService'

export async function userLogin(data) {
    const url = "api/user/login"
    return await postData(url ,{user: data});
}

export async function updateExamStatus(data) {
    const url = "api/exam/status"
    return await postData(url ,{exam: data});
}