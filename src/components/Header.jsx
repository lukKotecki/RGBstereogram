import react from 'react'

export default function Header(){

    let red = {color:'red'}
    let green = {color:'green'}
    let blue = {color:'blue'}

    return (
        <header>
            <h1><span style={red}>R</span>
                <span style={green}>G</span>
                <span style={blue}>B</span>stereogram.com
            </h1>

        </header>
    )
}