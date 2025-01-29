const moment = require("moment");

export const getTodaysDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}

export const getDifference = (exam) => {

    
    const now  = moment().format("MM/DD/YYYY HH:mm:ss");
    const examDate = exam.examDate + " " + exam.startTime;

    const ms = moment(examDate,"MM/DD/YYYY HH:mm:ss").diff(moment(now,"MM/DD/YYYY HH:mm:ss"));
    const d = moment.duration(ms);
    
    const diffInMinutes = d.asMinutes()
    return diffInMinutes;
}

export const getHourMinSecs = (exam) => {
    
    const now  = moment().format("MM/DD/YYYY HH:mm:ss");
    const examDate = exam.examDate + " " + exam.startTime;
    const ms = moment(examDate,"MM/DD/YYYY HH:mm:ss").diff(moment(now,"MM/DD/YYYY HH:mm:ss"));
    const d = moment.duration(ms);
    var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    const items = s.split(":");
    if (parseInt(items[0]) < 0) {
        return {hours: 0, minutes: 0, seconds: 0};
    }
    return {hours: parseInt(items[0]), minutes: parseInt(items[1]), seconds: parseInt(items[2])};

}

export const getCurrentTime = () => {
    return moment().format("MM/DD/YYYY HH:mm:ss");
}

export const getTimeDiffInSeconds = (oldTime) => {
    
    const now  = moment().format("MM/DD/YYYY HH:mm:ss");

    const ms = moment(now,"MM/DD/YYYY HH:mm:ss").diff(moment(oldTime,"MM/DD/YYYY HH:mm:ss"));
    const d = moment.duration(ms);
    
    return d.asSeconds()
}

export const isTodayWithinExamDates = (examStartDate, examEndDate) => {
    
    const now  = moment().format("MM/DD/YYYY");

    const isTodayGreaterThanStartDate = moment(now,"MM/DD/YYYY").diff(moment(examStartDate,"MM/DD/YYYY"));
    const isTodayLessThanEndDate = moment(examEndDate,"MM/DD/YYYY").diff(moment(now,"MM/DD/YYYY"));

    if(isTodayGreaterThanStartDate >= 0 && isTodayLessThanEndDate >=0) {
        return true;
    }
    return false;
}

export const isExamTimeWithin15Mins = (exam) => {

    const diffInMins = getDifference(exam);
    return diffInMins <= 15 && diffInMins > 0
}

export const getRemainingTime = (exam) => {
    
    const examStartTime = exam.examDate + " " + exam.startTime + 'am';
    const examEndTime = exam.examDate + " " + exam.endTime + 'am';
    const ms = moment(moment(examEndTime,"MM/DD/YYYY HH:mm:ss a").format()).diff(moment(examStartTime,"MM/DD/YYYY HH:mm:ss a").format());
    const d = moment.duration(ms);
    var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    const items = s.split(":");
    if (parseInt(items[0]) < 0) {
        return {hours: 0, minutes: 0, seconds: 0};
    }
    return {hours: parseInt(items[0]), minutes: parseInt(items[1]), seconds: parseInt(items[2])};

}