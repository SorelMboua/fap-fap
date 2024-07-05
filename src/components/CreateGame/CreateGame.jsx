import React, { useState } from 'react';
import './CreateGame.css';

const CreateGame = ({ onCancel }) => {
    const [username, setUsername] = useState('');
    const [betAmount, setBetAmount] = useState('');

    const handleCreateGame = () => {
        // Handle game creation logic here
        console.log('Game Created:', { username, betAmount });
    };

    return (
        <div>
            <header className="Header">
                <h1>Fap-Fap</h1>
            </header>
            <div className="CreateGame">
                <h2>Create a New Game</h2>
                <form>
                    <div className="FormGroup">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="betAmount">Bet Amount:</label>
                        <input
                            type="number"
                            id="betAmount"
                            value={betAmount}
                            onChange={(e) => setBetAmount(e.target.value)}
                        />
                    </div>
                    <div className="ButtonContainer">
                        <button type="button" className="GameButton" onClick={handleCreateGame}>
                            Create Game
                        </button>
                        <button type="button" className="CancelButton" onClick={onCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateGame;
