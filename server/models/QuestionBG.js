const mongoose = require('mongoose');

const questionBGSchema = new mongoose.Schema({

    question: {
        type: String,
        required: [true]
    },
    image: {
        type: String,
        required: [true, 'Image Is Required!'],
        validate: {
            validator: function(value) {
                if (!value.startsWith('http') || !value.startsWith('https')) {
                    throw new Error('Invalid Image URL!');
                }
            }
        }
    },
    answerOne: {
        type: String,
        require: [true]
    },
    one: {
        type: Boolean,
        require: [true],
        enum: [true, false]
    },
    answerTwo: {
        type: String,
        require: [true]
    },
    two: {
        type: Boolean,
        require: [true],
        enum: [true, false]
    },
    answerThree: {
        type: String,
        require: [true]
    },
    three: {
        type: Boolean,
        require: [true],
        enum: [true, false]
    },
    answerFour:  {
        type: String,
        require: [true]
    },
    four: {
        type: Boolean,
        require: [true],
        enum: [true, false]
    },
    correctAnswer: {
        type: String,
        require: [true]
    }
});

const QuestionBG = mongoose.model('QuestionBG', questionBGSchema);

module.exports = QuestionBG;