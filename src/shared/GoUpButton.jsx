import styles from "./scss/GoUpButton.module.css";

import { useState, useEffect } from "react";

export const GoUpButton = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handler = () => {
            (window.scrollY >25) ?
            setShowBtn(true)
            :
            setShowBtn(false)
        };

        window.addEventListener("scroll", handler);

        return() => {
            window.removeEventListener("scroll", handler);
        };
    },[]);

    const goUp = () => {
        setShowBtn(!showBtn);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <div className={styles.goUpContainer}>
            {showBtn && <button type="button" className={styles.goUp} onClick={goUp}>Up</button>}
        </div>
    );
};