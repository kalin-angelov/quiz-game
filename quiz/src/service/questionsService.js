export const getAllQuestions = async () => {
    try {
        const response = await fetch('http://localhost:3030/littleGame/questions');
        const data = await response.json();
       
        return Object.values(data.questions);
    } catch(error) {
        return null;
    }
};

export const getAllQuestionsBG = async () => {
    try {
        const response = await fetch('http://localhost:3030/littleGame/questionbgs');
        const data = await response.json();
       
        return Object.values(data.questions);
    } catch(error) {
        return null;
    }
};