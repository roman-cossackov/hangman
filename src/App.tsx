import { useState, useEffect, useCallback } from "react";
import { generate } from "random-words";

import "./App.css";
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/HangmanWord/HangmanWord";
import Keyboard from "./components/Keyboard/Keyboard";
import ResultModal from "./components/ResultModal/ResultModal";
import sound1 from "./assets/error_sound.wav";
import sound2 from "./assets/right_sound.mp3";
import sound3 from "./assets/win_sound.wav";

const WORD = generate({ minLength: 5, maxLength: 10 }).toUpperCase().split("");

function App() {
    const [wordToGuess, setWordToGuess] = useState<string[]>(WORD);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [incorrectLetters, setIncorrectLetter] = useState<string[]>([]);
    const [isWon, setIsWon] = useState<boolean>(false);
    const [isLost, setIsLost] = useState<boolean>(false);

    const addGuessedLetter = useCallback(
        (letter: string) => {
            console.log(wordToGuess);
            if (
                guessedLetters.includes(letter) ||
                incorrectLetters.includes(letter)
            ) {
                return;
            }
            if (wordToGuess.includes(letter)) {
                console.log(wordToGuess.filter((l) => l === letter).length)
                playRight();
                setGuessedLetters((prev) => [
                    ...prev,
                    ...wordToGuess.filter((l) => l === letter),
                ]);
                if (wordToGuess.length === guessedLetters.length + 1) {
                    playWin();
                    setIsWon(true);
                }
                if (wordToGuess.filter((l) => l === letter).length > 1) {
                    const length = wordToGuess.filter((l) => l === letter).length
                    if (wordToGuess.length === guessedLetters.length + length) {
                        playWin();
                        setIsWon(true);
                    }
                }
            } else {
                playWrong();
                setIncorrectLetter((prev) => [...prev, letter]);
                if (incorrectLetters.length === 5) {
                    setIsLost(true);
                }
            }
        },
        [guessedLetters, incorrectLetters, wordToGuess]
    );

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;

            if (!key.match(/^[a-z]$/)) return;

            e.preventDefault;
            addGuessedLetter(key.toUpperCase());
        };

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [guessedLetters, addGuessedLetter]);

    const startNewGame = () => {
        setIsWon(false);
        setIsLost(false);
        setWordToGuess(
            generate({ minLength: 5, maxLength: 10 }).toUpperCase().split("")
        );
        setGuessedLetters([]);
        setIncorrectLetter([]);
    };

    const playWrong = () => {
        const audio = new Audio(sound1);
        audio.volume = 0.1;
        audio.play();
    };

    const playRight = () => {
        new Audio(sound2).play();
    };

    const playWin = () => {
        new Audio(sound3).play();
    };

    return (
        <>
            <div className="wrapper">
                <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
                <HangmanWord
                    guessedLetters={guessedLetters}
                    wordToGuess={wordToGuess}
                />
                <Keyboard
                    activeLetters={guessedLetters.filter((letter) =>
                        wordToGuess.includes(letter)
                    )}
                    inactiveLetters={[...guessedLetters, ...incorrectLetters]}
                    addGuessedLetter={addGuessedLetter}
                />
            </div>
            {isWon && (
                <ResultModal
                    startNewGame={startNewGame}
                    content={"YOU WON!!!"}
                />
            )}
            {isLost && (
                <ResultModal
                    startNewGame={startNewGame}
                    content={"YOU LOST("}
                />
            )}
        </>
    );
}

export default App;
