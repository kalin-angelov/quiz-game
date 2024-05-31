import styles from "./scss/Card.module.css";

export const TrueCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardFront}>
                <img src="/images/card-front-true.png" alt="card-front-true" className={styles.cardImg} />
            </div>
        </div>
    );
};