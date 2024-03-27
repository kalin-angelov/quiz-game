import styles from './Home.module.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllQuestions, getAllQuestionsBG } from '../../service/questionsService';
import { addNewUser } from '../../service/userService';

export const Home = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [questions, setQuestions] = useState([]);
    const [questionsBG, setQuestionsBG] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [selected, setSelected] = useState("EN");

    useEffect(() => {
        getAllQuestions()
            .then(questions => setQuestions(questions))
            .catch(error => console.log(error))
        getAllQuestionsBG()
            .then(questionsBG => setQuestionsBG(questionsBG))
            .catch(error => console.log(error))
    }, []);

    const errorHandler = (error) => {
        setErrorMessage(error);
        setUsername('');
    };

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const onClickStart = async (event) => {
        event.preventDefault();

        if (questions === null) {
            navigate('/404');
            return;
        };

        try {
            const user = await addNewUser(username);

            selected === 'BG' ?
            navigate('/quiz', {state: {
                questions: questionsBG,
                user: user,
                selected: selected
            }})
            :
            navigate('/quiz', {state: {
                questions: questions,
                user: user,
                selected: selected
            }})
            
        } catch (error) {
            errorHandler(error);
        }

    };

    const onClickESC = (event) => {
        if (event.keyCode === 27) {
            setUsername('');
        }
    };

    const onFocusIn = (event) => {
        event.target.placeholder = "";
    };

    const onFocusOut = (event) => {
        event.target.placeholder = "Enter you'r name here....";
    };

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div className={styles.home}>
            <h1>Funny Quiz</h1>
            <form>
                {errorMessage === null ?
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter you'r name here...."
                        name='username'
                        autoComplete='off'
                        onChange={onUsernameChange}
                        value={username}
                        onKeyDown={onClickESC}
                        onFocus={onFocusIn}
                        onBlur={onFocusOut}
                    />
                    :
                    <input 
                    className={styles.errorInput}
                    type="text"
                    placeholder={errorMessage}
                    name='username'
                    autoComplete='off'
                    onChange={onUsernameChange}
                    value={username}
                    onKeyDown={onClickESC}
                    onFocus={onFocusIn}
                    onBlur={onFocusOut}
                    />
                }
                <section className={styles.radioButtons}>
                    <input 
                        type="radio"
                        value="EN"
                        name="choose"
                        checked={selected === 'EN'}
                        onChange={handleChange}
                    />
                    <label htmlFor="EN">EN</label>

                    <input 
                        type="radio"
                        value="BG"
                        name="choose"
                        checked={selected === 'BG'}
                        onChange={handleChange}
                    />
                    <label htmlFor="BG">BG</label>

                    <p>Chose language / Избери език</p>
                </section>

                <section >
                    <button className={styles.start} onClick={onClickStart}>Lets get started</button>
                </section>
            </form>
        </div>
    );
};