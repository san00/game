import React from "react";
interface GameProps {
    setScore: (score: number) => void;
}

const Game: React.FC<GameProps> = () => {
    return (
        <div>
            <p>game comp</p>
        </div>
    );
};

export default Game;
