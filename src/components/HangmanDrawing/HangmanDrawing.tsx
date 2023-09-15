import styles from './HangmanDrawing.module.css'

const HEAD = (
    <div className={styles.hangmanHead}></div>
);
const BODY = (
    <div className={styles.hangmanBody}></div>
)
const RIGHT_ARM = (
    <div className={styles.hangmanRightArm}></div>
);
const LEFT_ARM = (
    <div className={styles.hangmanLeftArm}></div>
);
const RIGHT_LEG = (
    <div className={styles.hangmanRightLeg}></div>
);
const LEFT_LEG = (
    <div className={styles.hangmanLeftLeg}></div>
);


const HangmanDrawing = () => {
    return (
        <div className={styles.wrapper}>
            {HEAD}
            {BODY}
            {RIGHT_ARM}
            {LEFT_ARM}
            {RIGHT_LEG}
            {LEFT_LEG}
            <div className={styles.endBar}></div>
            <div className={styles.topBar}></div>
            <div className={styles.verticalBar}></div>
            <div className={styles.bottomBar}></div>
        </div>
    );
};

export default HangmanDrawing;