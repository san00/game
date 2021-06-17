import React from "react";
import { Link } from "react-router-dom"
interface ResultsProps {
    setScore: (score: number) => void;
    choice: string | undefined;
}

const Results: React.FC<ResultsProps> = ({ choice, setScore }: ResultsProps) => {
    return (
        <div>
            <p>Results comp</p>
            <p>{choice}</p>
            <Link to="/">
                <button>new game</button>
            </Link>
        </div>
    );
};

export default Results;
