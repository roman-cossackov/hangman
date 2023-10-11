import styles from "./Keyboard.module.css";

const KEYS = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

type KeyboardProps = {
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void;
};

const Keyboard = (props: KeyboardProps) => {
    return (
        <div className={styles.keyboard}>
            {KEYS.map((key) => (
                <button
                    key={key}
                    className={`${styles.key} ${props.inactiveLetters.includes(key) && styles.inactive}`}
                    onClick={() => {
                        props.addGuessedLetter(key);
                    }}
                >
                    {key}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;
