import styles from './HangmanWord.module.css'

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string[]
}

const HangmanWord = (props:HangmanWordProps) => {
    return (
        <div className={styles.word}>
            {props.wordToGuess.map((letter, index) => (
                <span className={styles.letter} key={index}>
                    <span style={
                        {visibility: props.guessedLetters.includes(letter) ? "visible" : "hidden"}
                    }>{letter}</span>
                </span>
            ))}
        </div>
    );
};

export default HangmanWord;