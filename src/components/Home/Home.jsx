import styles from "./scss/Home.module.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import dataBG from "../../data/dataBG.json";
import dataEN from "../../data/dataEN.json";

export const Home = () => {
    const navigate = useNavigate();

    const [questionsEN, setQuestionsEN] = useState([]);
    const [questionsBG, setQuestionsBG] = useState([]);
    const [selected, setSelected] = useState("EN");

    useEffect(() => {
       setQuestionsEN(dataEN);
       setQuestionsBG(dataBG);
    }, []);

    const onClickStart = () => {
        selected === "EN" ?
        navigate("/quiz", {state: {
            questions: questionsEN,
        }})
        : 
        navigate("/quiz", {state: {
            questions: questionsBG,
        }})
    };

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <section className={styles.homeSection}>
            <figure>
                <img src="/images/logo.png" width={375} alt="logo" />
            </figure>
            <form className={styles.radioButtons}>
                <input 
                    type="radio"
                    value="EN"
                    name="choose"
                    checked={selected === "EN"}
                    onChange={handleChange}
                />
                <label htmlFor="EN">EN</label>

                <input 
                    type="radio"
                    value="BG"
                    name="choose"
                    checked={selected === "BG"}
                    onChange={handleChange}
                />
                <label htmlFor="BG">BG</label>
            </form>
            <p>Chose language / Избери език</p>
            <button 
                className={styles.startBtn} 
                onClick={onClickStart}
            >
                Lets get started
            </button>
        </section>
    );
};