import styles from './HangmanDrawing.module.css'

const HEAD = (
    <div key={'head'} className={styles.hangmanHead}></div>
);
const BODY = (
    <div key={'body'} className={styles.hangmanBody}></div>
)
const RIGHT_ARM = (
    <div key={'right_arm'} className={styles.hangmanRightArm}></div>
);
const LEFT_ARM = (
    <div key={'left_arm'} className={styles.hangmanLeftArm}></div>
);
const RIGHT_LEG = (
    <div key={'right_lg'} className={styles.hangmanRightLeg}></div>
);
const LEFT_LEG = (
    <div key={'legt_leg'} className={styles.hangmanLeftLeg}></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number;
}

const HangmanDrawing = (props:HangmanDrawingProps) => {
    return (
        <div className={styles.wrapper}>
            {BODY_PARTS.slice(0, props.numberOfGuesses)}
            <div className={styles.endBar}></div>
            <div className={styles.topBar}></div>
            <div className={styles.verticalBar}></div>
            <div className={styles.bottomBar}></div>
        </div>
    );
};

export default HangmanDrawing;