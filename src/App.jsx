import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentPhase, setCurrentPhase] = useState('Allahu Akbar');
  const [countAllahuAkbar, setCountAllahuAkbar] = useState(0);
  const [countAlhamdulillah, setCountAlhamdulillah] = useState(0);
  const [countSubhanallah, setCountSubhanallah] = useState(0);

  const handleIncrement = () => {
    if (currentPhase === 'Allahu Akbar') {
      setCountAllahuAkbar(countAllahuAkbar + 1);
      if (countAllahuAkbar === 34) {
        setCurrentPhase('Alhamdulillah');
      }
    } else if (currentPhase === 'Alhamdulillah') {
      setCountAlhamdulillah(countAlhamdulillah + 1);
      if (countAlhamdulillah === 33) {
        setCurrentPhase('Subhanallah');
      }
    } else {
      setCountSubhanallah(countSubhanallah + 1);
      if (countSubhanallah === 33) {
        setCurrentPhase('Allahu Akbar');
      }
    }
  };

  const handleReset = () => {
    setCountAllahuAkbar(0);
    setCountAlhamdulillah(0);
    setCountSubhanallah(0);
    setCurrentPhase('Allahu Akbar');
  };

  return (
    <>
        <div>
      <h2>Tasbeeh Counter</h2>
      <div>
        <p>{currentPhase}: {currentPhase === 'Allahu Akbar' ? countAllahuAkbar : currentPhase === 'Alhamdulillah' ? countAlhamdulillah : countSubhanallah}</p>
      </div>
      <button onClick={handleIncrement}>Count</button>
      <button onClick={handleReset}>Reset</button>
    </div>

    </>
  )
}

export default App
