import styles from "./scss/Results.module.css";

import { useLocation, useNavigate } from "react-router-dom";

import { QuestionsInfo } from "../QuestionsInfo/QuestionsInfo";

export const Results = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const user = location.state.user;
    const points = location.state.points;
    const givenAnswers = location.state.givenAnswers;
    const questions = location.state.questions;

    const onPlayAgain = async () => {
        try {
            await removeUser(user._id);

            navigate("/quiz", {state: {
                questions: questions,
                user: user
            }});
        } catch (error) {
            console.log(error);
        }
    };

    
    const onCLickQuit = async (event) => {
        event.preventDefault();

        try {
            await removeUser(user._id);

            navigate("/");
        } catch (error) {
            console.log(error);
        }

    };
    
    return (
        <div className={styles.result}> 
            <h2><i className="fa-solid fa-asterisk"></i> <i className="fa-regular fa-id-badge"></i>: {user.username}<i className="fa-solid fa-sack-dollar"></i>: {points}/{questions.length - 1}0 <i className="fa-solid fa-asterisk"></i></h2>
            <h3><i className="fa-solid fa-rectangle-list"></i></h3>
           
            <section>
                {givenAnswers.map(questionAndAnswer => 
                    <QuestionsInfo 
                        key={questionAndAnswer.question} 
                        questionAndAnswer={questionAndAnswer} 
                    />
                )}
            </section>
            <button className={styles.quit} onClick={onCLickQuit}><i className="fa-solid fa-circle-xmark"></i></button>
            <button className={styles.playAgain} onClick={onPlayAgain}><i className="fa-solid fa-rotate-left"></i></button>
        </div>
    )
};