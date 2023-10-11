import { useState, useEffect, useCallback } from "react";
import { generate } from "random-words";

import "./App.css";
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/HangmanWord/HangmanWord";
import Keyboard from "./components/Keyboard/Keyboard";
import ResultModal from "./components/ResultModal/ResultModal";
import sound1 from "./assets/error.wav";
import sound2 from "./assets/right_sound.mp3";
import sound3 from "./assets/win_sound.wav";

const WORD = generate({minLength: 5, maxLength: 10 }).toUpperCase().split('')

function App() {
    const [wordToGuess, setWordToGuess] = useState(WORD);
    console.log(WORD);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [isWon, setIsWon] = useState(true);
    const incorrectLetters = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter)
    );
    // ADD SOUNDS!!!

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (
                guessedLetters.includes(letter) ||
                incorrectLetters.includes(letter)
            )
                return;

            setGuessedLetters((prev) => [...prev, letter]);
            console.log(guessedLetters);
        },
        [guessedLetters, incorrectLetters]
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

    
  const playWrong = () => {
    new Audio(sound1).play()
  }

  const playRight = () => {
    new Audio(sound2).play()
  }

  const playWin = () => {
    new Audio(sound3).play()
  }
  
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
            {isWon && <ResultModal setIsWon={setIsWon}/>}
            
        </>
    );
}

export default App;
