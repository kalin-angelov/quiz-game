import styles from "./scss/NotFound.module.css";

import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <article className={styles.page404}>
            <h1>Oops!</h1>
            <p>I don't know were you are trying to go, but this is not the correct path</p>
            <button onClick={() => {navigate("/")}}>Go Back</button>
        </article>
    );
}