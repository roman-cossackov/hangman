import { useState, useEffect } from 'react';
import { generate } from 'random-words';

import './App.css';
import HangmanDrawing from './components/HangmanDrawing/HangmanDrawing';
import HangmanWord from './components/HangmanWord/HangmanWord';
import Keyboard from './components/Keyboard/Keyboard';
import ResultModal from './components/ResultModal/ResultModal';

function App() {
const [wordToGuess, setWordToGuess] = useState(generate({ minLength: 5, maxLength: 10}));
const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
// ADD SOUNDS!!!

const addGuessedLetter = (letter: string) => {
  if (guessedLetters.includes(letter)) return

  setGuessedLetters(prev => [...prev, letter])
}

useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    const key = e.key;

    if (!key.match(/^[a-z]$/)) return;

    e.preventDefault;
    addGuessedLetter(key)
  };

  document.addEventListener("keypress", handler);

  return () => {
    document.removeEventListener("keypress", handler)
  }
}, [guessedLetters])
  return (
    <>
    <div className='wrapper'>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <Keyboard />
    </div>
    <ResultModal />
    </>
  );
}

export default App;
