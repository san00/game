import React from 'react'
interface HeaderProps {
    score: number
}
import { Wrapper, InnerWrap, ScoreText, ScoreBoard } from './header-styles'

const Header: React.FC<HeaderProps> = ({ score }: HeaderProps) => {
    return (
        <Wrapper>
            <InnerWrap>
                <ScoreText>Rock</ScoreText>
                <ScoreText>Paper</ScoreText>
                <ScoreText>Scissors</ScoreText>
            </InnerWrap>
            <ScoreBoard >Score{score}</ScoreBoard>
        </Wrapper>

    )
}

export default Header
