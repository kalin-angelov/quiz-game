import styles from "./scss/Quiz.module.css";

import useSound from "use-sound";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { MainCard } from "../Cards/MainCard";
import { TrueCard } from "../Cards/TrueCard";
import { FalseCard } from "../Cards/FalseCard";

export const Quiz = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const questions = location.state.questions;

    const [showCard, setShowCard] = useState(false);
    const [isTrueCard, setIsTrueCard] = useState(false);
    const [isFalseCard, setIsFalseCard] = useState(false);
    const [questionCounter, setQuestionCounter] = useState(0);
    const [points, setPoints] = useState(0);
    const [givenAnswers, setGivenAnswers] = useState([]);
    
    const [victorySound] = useSound("/sounds/Correct-sound.mp3");
    const [defeatSound] = useSound("/sounds/Wrong-sound.mp3");
    const [waitingSound] = useSound("/sounds/Waiting-sound.wav")

    let result = {
        question: questions[questionCounter].question,
        img: questions[questionCounter].img,
        answerA: questions[questionCounter].answerOne,
        answerB: questions[questionCounter].answerTwo,
        answerC: questions[questionCounter].answerThree,
        answerD: questions[questionCounter].answerFour,
        correctAnswer: questions[questionCounter].correctAnswer,
    };

    const questionAndPointControl = (questions) => {
        if (questions.length - 1 === questionCounter) {
            setQuestionCounter(questions.length - 1);
        } else {
            setQuestionCounter(questionCounter => ++questionCounter);
        }
    };

    const onClickResult = (event) => {
        event.preventDefault();
        setQuestionCounter(0);
        navigate("/result", {
            state:
            {
                points,
                questions,
                givenAnswers
            }
        });
    };

    const onClickIsTrue = (event) => {
        const answer = event.target.name;
        result = {...result, givenAnswer: answer};

        setShowCard(true);
        waitingSound();
        setTimeout(() => {
            setShowCard(false);
            victorySound();
            setIsTrueCard(true);
            setPoints(points => points + 10);
            setGivenAnswers(givenAnswer => [...givenAnswer, result]);
        }, 2000);

        setTimeout(() => {
            setIsTrueCard(false);
            questionAndPointControl(questions);
        }, 4500);

    };

    const onClickIsFalse = (event) => {
        const answer = event.target.name;
        result = {...result, givenAnswer: answer};

        setShowCard(true);
        waitingSound();
        setTimeout(() => {
            setShowCard(false);
            defeatSound();
            setIsFalseCard(true);
            setGivenAnswers(givenAnswer => [...givenAnswer, result]);
        }, 2000);

        setTimeout(() => {
            setIsFalseCard(false);
            questionAndPointControl(questions);
        }, 4500);
    };

    const onCLickQuit = () => {
        navigate("/");
    };

    return (
        <>
            {showCard && <MainCard />}
            {isTrueCard && <TrueCard/>}
            {isFalseCard && <FalseCard />}

            <div className={styles.quizContainer}>
                <header className={styles.header}>
                    {questions.length - 1 !== questionCounter &&
                        isTrueCard ?
                        <p className={styles.plusPoint}>+10</p>
                        : 
                        <p>{points}/{questions.length - 1}0</p>
                    }
                </header>
                 
                <div className={styles.questionContainer}>
                    <p className={styles.question}>{questions[questionCounter].question}</p>
                    <figure className={styles.imgContainer}>
                        <img src={questions[questionCounter].img} alt="someImg" />
                    </figure>
                    
                    {questions.length - 1 !== questionCounter ?
                        <div className={styles.answersBtnContainer}>
                            {questions[questionCounter].one === true ?
                                <button className={styles.answerBtn} onClick={onClickIsTrue} name={questions[questionCounter].answerOne}>
                                    {questions[questionCounter].answerOne}
                                </button>
                                :
                                <button className={styles.answerBtn} onClick={onClickIsFalse} name={questions[questionCounter].answerOne}>
                                    {questions[questionCounter].answerOne}
                                </button>
                            }

                            {questions[questionCounter].two === true ?
                                <button className={styles.answerBtn} onClick={onClickIsTrue} name={questions[questionCounter].answerTwo}>
                                    {questions[questionCounter].answerTwo}
                                </button>
                                :
                                <button className={styles.answerBtn} onClick={onClickIsFalse} name={questions[questionCounter].answerTwo}>
                                    {questions[questionCounter].answerTwo}
                                </button>
                            }

                            {questions[questionCounter].three === true ?
                                <button className={styles.answerBtn} onClick={onClickIsTrue} name={questions[questionCounter].answerThree}>
                                    {questions[questionCounter].answerThree}
                                </button>
                                :
                                <button className={styles.answerBtn} onClick={onClickIsFalse} name={questions[questionCounter].answerThree}>
                                    {questions[questionCounter].answerThree}
                                </button>
                            }

                            {questions[questionCounter].four === true ?
                                <button className={styles.answerBtn} onClick={onClickIsTrue} name={questions[questionCounter].answerFour}>
                                    {questions[questionCounter].answerFour}
                                </button>
                                :
                                <button className={styles.answerBtn} onClick={onClickIsFalse} name={questions[questionCounter].answerFour}>
                                    {questions[questionCounter].answerFour}
                                </button>
                            }
                        </div>
                        :
                        <div className={styles.result}>
                            <button onClick={onClickResult} name={questions[questionCounter].answerOne}>
                                {questions[questionCounter].answerOne}
                            </button>
                        </div>
                    }
                </div>
                
                {questionCounter !== 20 ? <button className={styles.quit} onClick={onCLickQuit}>Give Up</button> : null}
            </div>
        </>
    );
};