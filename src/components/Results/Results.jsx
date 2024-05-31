import styles from "./scss/Results.module.css";

import { useLocation, useNavigate } from "react-router-dom";

import { QuestionsInfo } from "../QuestionsInfo/QuestionsInfo";
import { GoUpButton } from "../../shared/GoUpButton";

export const Results = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const points = location.state.points;
    const givenAnswers = location.state.givenAnswers;
    const questions = location.state.questions;

    const onPlayAgain = () => {
        navigate("/");
    };
    
    return (
        <section className={styles.result}> 
            <h1><i className="fa-regular fa-id-badge"></i>{points}/{questions.length - 1}0</h1>
            <div className={styles.questionsContainer}>
                {givenAnswers.map(questionAndAnswer => 
                    <QuestionsInfo 
                        key={questionAndAnswer.question} 
                        questionAndAnswer={questionAndAnswer} 
                    />
                )}
            </div>
            <button className={styles.playAgain} onClick={onPlayAgain}><i className="fa-solid fa-rotate-left"></i></button>
            <GoUpButton/>
        </section>
    );
};