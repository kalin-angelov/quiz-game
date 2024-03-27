const Question = require('../models/Question');
const QuestionBG = require('../models/QuestionBG');

exports.getAllQuestions = () => Question.find({});
exports.getAllQuestionsBG = () => QuestionBG.find({});
exports.createNewQuestion = ( question, image, answerOne, one, answerTwo, two, answerThree, three, answerFour, four ) => Question.create({ question, image, answerOne, one, answerTwo, two, answerThree, three, answerFour, four });