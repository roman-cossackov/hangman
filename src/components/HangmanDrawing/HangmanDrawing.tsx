import styles from './HangmanDrawing.module.css'

const HangmanDrawing = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topBar}></div>
            <div className={styles.verticalBar}></div>
            <div className={styles.bottomBar}></div>
        </div>
    );
};

export default HangmanDrawing;