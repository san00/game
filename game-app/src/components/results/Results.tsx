import React, { useEffect } from "react";
import { Link } from "react-router-dom"
interface ResultsProps {
    setScore: (score: number) => void;
    choice: string | undefined;
    computerChoice: string | number | undefined;
    score: number
    setUserMessage: (message: string) => void;
    userMessage: string
}

const Results: React.FC<ResultsProps> = ({ choice, score, setScore, userMessage, setUserMessage, computerChoice }: ResultsProps) => {
    useEffect(() => {

        const res = () => {
            if (choice === computerChoice) {

                setUserMessage("The game is tied")

            } else {
                if (choice === "rock" && computerChoice === "scissors" ||
                    choice === "paper" && computerChoice === "rock" ||
                    choice === "scissors" && computerChoice === "paper") {
                    setScore(score += 1)
                    setUserMessage("Player wins")
                }

                setScore(score -= 1)
                setUserMessage("comp wins")
            }
        }
        res()

    }, [setScore])


    return (
        <div>
            <p>Results comp</p>
            <p>You picked {choice}</p>
            <p>Computer picked {computerChoice}</p>
            <p>{userMessage}</p>
            <Link to="/">
                <button>Play again</button>
            </Link>
        </div>
    );
};

export default Results;
