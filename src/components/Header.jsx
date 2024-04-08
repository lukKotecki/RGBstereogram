import react from 'react'

export default function Header(){

    let red = {color:'red', textShadow:'0 0 3px green'}
    let green = {color:'green', textShadow:'0 0 3px blue'}
    let blue = {color:'blue', textShadow:'0 0 3px red'}

    return (
        <header>
            <h1><span style={red}>R</span>
                <span style={green}>G</span>
                <span style={blue}>B</span>stereoGram.com
            </h1>

        </header>
    )
}