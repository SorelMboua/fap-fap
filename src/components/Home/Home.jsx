import React from 'react';
import cardsHomepage from '../../assets/cards-homepage2.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <header className="Header">
                <h1>Fap-Fap</h1>
            </header>
            <nav className="NavBar">
                <ul>
                    <li><a href="#home">Rules</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <main className="MainContent">
                <h2>Welcome to fap-fap! The card game for real bettors</h2>
                <p>Get ready to play an exciting card game with friends and family.</p>
                <img src={cardsHomepage} alt="Cards and money on a table" className="MainImage" />
                <div className="ButtonContainer">
                    <button className="Create GameButton ">Create New Game</button>
                    <button className="Join GameButton">Join Game</button>
                </div>
            </main>
            <footer className="Footer">
                <p>&copy; 2024 Fap-Fap. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
