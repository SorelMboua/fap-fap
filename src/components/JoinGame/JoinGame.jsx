import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinGame.css';

const JoinGame = () => {
    const [gameId, setGameId] = useState('');
    const [username, setUsername] = useState('');
    const betAmount = 50; // Example bet amount, in a real app this would come from props or state
    const navigate = useNavigate();

    const handleJoinGame = () => {
        // Handle game joining logic here
        console.log('Game Joined:', { username, betAmount });
        navigate('/waiting-room');
    };

    return (
        <div>
            <header className="Header">
                <h1>Fap-Fap</h1>
            </header>
            <div className="JoinGame">
                <div className="JoinGameContent">
                    <h2>Join a Game</h2>
                    <form>
                        <div className="FormGroup">
                            <label htmlFor="username">Game Id:</label>
                            <input
                                type="text"
                                id="gameId"
                                value={gameId}
                                onChange={(e) => setGameId(e.target.value)}
                            />
                        </div>
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
                                readOnly
                            />
                        </div>
                        <div className="ButtonContainer">
                            <button type="button" className="GameButton" onClick={handleJoinGame}>
                                Join Game
                            </button>
                            <button type="button" className="CancelButton" onClick={() => navigate('/')}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinGame;
