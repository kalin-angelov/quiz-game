import styles from "./scss/Card.module.css";

export const FalseCard = () => {
    return (
        <div className={styles.card}>
            <figure className={styles.cardFront}>
                <img src="/images/card-wrong-v2.png" alt="card-front-false" className={styles.cardImg} />
            </figure>
        </div>
    );
};