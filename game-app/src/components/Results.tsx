import React from "react";
import { Link } from "react-router-dom"
interface ResultsProps {
    setScore: (score: number) => void;
    choice: string | undefined;
    computerChoice: string | number | undefined;
}

const Results: React.FC<ResultsProps> = ({ choice, setScore, computerChoice }: ResultsProps) => {
    return (
        <div>
            <p>Results comp</p>
            <p>You picked {choice}</p>
            <p>Computer picked {computerChoice}</p>

            <Link to="/">
                <button>new game</button>
            </Link>
        </div>
    );
};

export default Results;
