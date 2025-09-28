import styles from "./scss/Card.module.css";

export const TrueCard = () => {
    return (
        <div className={styles.card}>
            <figure className={styles.cardFront}>
                <img src="/images/card-correct-v2.png" alt="card-front-true" className={styles.cardImg} />
            </figure>
        </div>
    );
};