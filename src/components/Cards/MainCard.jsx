import styles from "./scss/Card.module.css";

export const MainCard = () => {
    return (
        <div className={styles.mainCard}>
            <div className={styles.cardFront}>
                <img src="public/images/card-back.png" alt="card-back" className={styles.cardImg} />
            </div>
        </div>
    );
};