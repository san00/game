import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
interface GameProps {
    setUserChoice: (userChoice?: string) => void;
    setCompChoice: (computerChoice?: string | number) => void;

}
const Game: React.FC<GameProps> = ({ setUserChoice, setCompChoice }: GameProps) => {


    const setChoiceOnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        setUserChoice(e.currentTarget.dataset.id)

    }

    useEffect(() => {
        const setRandomComputerChoice = () => {
            const choice = ["rock ", "paper", "scissors"];
            setCompChoice(choice[Math.floor(Math.random() * choice.length)])
        }
        setRandomComputerChoice()
    }, [setCompChoice])


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
