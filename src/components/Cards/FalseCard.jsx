import styles from "./scss/Card.module.css";

export const FalseCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardFront}>
                <img src="public/images/card-front-false.png" alt="card-front-false" className={styles.cardImg} />
            </div>
        </div>
    );
};