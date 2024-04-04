import react from 'react'

export default function Header(){

    let red = {color:'red'}
    let green = {color:'green'}
    let blue = {color:'blue', textShadow:'0 0 12 #010'}

    return (
        <header>
            <h1><span style={red}>R</span>
                <span style={green}>G</span>
                <span style={blue}>B</span>stereoGram.com
            </h1>

        </header>
    )
}