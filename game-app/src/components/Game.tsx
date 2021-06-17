import React from 'react'
import { Link } from "react-router-dom"
interface GameProps {
    setUserChoice: (userChoice?: string) => void;

}
const Game: React.FC<GameProps> = ({ setUserChoice }: GameProps) => {


    const setChoiceOnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        setUserChoice(e.currentTarget.dataset.id)

    }

    return (
        <div>
            <p>game comp</p>
            <Link to="/results">
                <button data-id="rock" onClick={setChoiceOnClick} >rock</button>
            </Link>
            <Link to="/results">
                <button data-id="paper" onClick={setChoiceOnClick} >paper</button>
            </Link>
            <Link to="/results">
                <button data-id="scissors" onClick={setChoiceOnClick} >scissors</button>
            </Link>
        </div>
    )
}

export default Game
