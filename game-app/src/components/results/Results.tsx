import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import { Wrapper, InnerWrap, GameIcon, UserMessage, NewGameButton } from "../results/results-styles";
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
        <Wrapper>
            <GameIcon >You picked {choice} </GameIcon>
            <InnerWrap>
                <UserMessage>{userMessage}</UserMessage>
                <Link to="/">
                    <NewGameButton>Play again</NewGameButton>
                </Link></InnerWrap>
            <GameIcon >Computer picked {computerChoice}</GameIcon>
        </Wrapper>
    );
};

export default Results;
