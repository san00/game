import React from 'react'
interface HeaderProps {
    score: number
}

const Header: React.FC<HeaderProps> = ({ score }: HeaderProps) => {
    return (
        <div>
            <p>Score{score}</p>
        </div>
    )
}

export default Header
