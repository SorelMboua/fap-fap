import React from 'react';
import './WaitingRoom.css';

const WaitingRoom = ({ gameId = '123456', betAmount = 15, players = ['sorel', 'maeva'] }) => {

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
                        <button className="GameButton">Start Game</button>
                        <button className="CancelButton">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitingRoom;
