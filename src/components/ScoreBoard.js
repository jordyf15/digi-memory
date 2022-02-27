import React from 'react';
import '../styles/scoreboard.css';

const ScoreBoard = ({currentScore, bestScore}) => {
    return <div id='scoreboard'>
        <p>
            <span id='current-score'>Score: {currentScore}</span>
            <span id='best-score'>Best: {bestScore}</span>
        </p>
    </div>
}

export default ScoreBoard;