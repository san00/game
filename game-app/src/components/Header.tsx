import React from 'react'
interface HeaderProps {
    score:number
}

function Header({score}: HeaderProps) {
    return (
        <div>
            <p>points:{score}</p>
        </div>
    )
}

export default Header
