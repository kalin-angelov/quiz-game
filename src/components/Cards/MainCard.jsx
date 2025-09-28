import styles from "./scss/Card.module.css";

export const MainCard = () => {
    return (
        <div className={styles.mainCard}>
            <figure className={styles.cardFront}>
                <img src="/images/card-back-v2.png" alt="card-back" className={styles.cardImg} />
            </figure>
        </div>
    );
};