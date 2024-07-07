import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WaitingRoom.css';

const WaitingRoom = ({ gameId = '123456', betAmount = 15, players = ['sorel', 'maeva'] }) => {
    const navigate = useNavigate();

    const handleStartGame = () => {
        // Handle game creation logic here
        console.log('Game started:', { gameId });
        alert('game under construction');
    };

    const handleCancelGame = () => {
        // Handle game creation logic here
        console.log('Game canceled:');
        alert('you will be removed from the game');
        navigate('/');
    };

    return (
        <div>
            <header className="Header">
                <h1>Fap-Fap</h1>
            </header>
            <div className="WaitingRoom">
                <div className="WaitingRoomContent">
                    <h2>Waiting Room</h2>
                    <p><strong>Game ID:</strong> {gameId}</p>
                    <p><strong>Bet Amount:</strong> €{betAmount}</p>
                    <h3>Players</h3>
                    <ul>
                        {players.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                    <div className="ButtonContainer">
                        <button className="GameButton" onClick={handleStartGame}>Start Game</button>
                        <button className="CancelButton" onClick={handleCancelGame}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitingRoom;
