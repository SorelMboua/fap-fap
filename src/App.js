import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateGame from './components/CreateGame/CreateGame';
import JoinGame from './components/JoinGame/JoinGame';
import WaitingRoom from './components/WaitingRoom/WaitingRoom';
import './App.css';

function App() {
  const gameId = '123456';
  const betAmount = 50;
  const players = ['Alice', 'Bob'];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route path="/join-game" element={<JoinGame betAmount={betAmount} />} />
          <Route
            path="/waiting-room"
            element={<WaitingRoom gameId={gameId} betAmount={betAmount} players={players} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
