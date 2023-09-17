import styles from './HangmanWord.module.css'

const HangmanWord = () => {
    const word = "test"
    const guessedLetters = ['t'];
    return (
        <div className={styles.word}>
            {word.split('').map((letter, index) => (
                <span className={styles.letter} key={index}>
                    <span style={
                        {visibility: guessedLetters.includes(letter) ? "visible" : "hidden"}
                    }>{letter}</span>
                </span>
            ))}
        </div>
    );
};

export default HangmanWord;