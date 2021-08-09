import React from 'react'
interface HeaderProps {
    score: number
}
import { Wrapper, InnerWrap, ScoreBoardText, ScoreBoard } from './header-styles'

const Header: React.FC<HeaderProps> = ({ score }: HeaderProps) => {
    return (
        <Wrapper>
            <InnerWrap>
                <ScoreBoardText>Rock</ScoreBoardText>
                <ScoreBoardText>Paper</ScoreBoardText>
                <ScoreBoardText>Scissors</ScoreBoardText>
            </InnerWrap>
            <ScoreBoard >Score {score}</ScoreBoard>
        </Wrapper>

    )
}

export default Header
