import React from 'react';

const ScoreBoard = ({currentScore, bestScore}) => {
    return <div>
        <p>
            <span>Score: {currentScore}</span>
            <span>Best: {bestScore}</span>
        </p>
    </div>
}

export default ScoreBoard;