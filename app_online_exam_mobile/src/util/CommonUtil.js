export const sortByAsc = (a, b) => {
    return parseInt(a) - parseInt(b)
}

export const getAnswerOptions = (answerCount) => {

    const options = ["A", "B", "C", "D", "E", "F", "G", "H"]

    try{
        const answerCountInt = parseInt(answerCount);

        return options.slice(0, answerCountInt);
    } catch(err) {
        return ["A", "B", "C", "D", "E"]
    }
    
}