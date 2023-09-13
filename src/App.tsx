import { useState } from 'react';
import { generate } from 'random-words';

import './App.css';
import HangmanDrawing from './components/HangmanDrawing/HangmanDrawing';
import HangmanWord from './components/HangmanWord/HangmanWord';
import Keyboard from './components/Keyboard/Keyboard';
import ResultModal from './components/ResultModal/ResultModal';

function App() {
const [wordToGuess, setWordToGuess] = useState(generate({ minLength: 5, maxLength: 10}));
const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <>
    <div className='wrapper'>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
    <ResultModal />
    </>
  );
}

export default App;
