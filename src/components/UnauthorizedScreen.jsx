import React from 'react'
import '../App.css';
import guilt1 from '../images/Guilt1.png'
import guilt2 from '../images/Guilt2.png'
import guilt3 from '../images/Guilt3.png'
import guilt4 from '../images/Guilt4.png'

import useSound from 'use-sound'
import guiltMusic from '../sounds/GuiltMusic.mp3'
import SlideShow from './SlideShow'

function UnauthorizedScreen(props) {
    const slides = [guilt1, guilt2, guilt3, guilt4]
    const [play] = useSound(guiltMusic)

    play()

    return (
        <div className='body'>
            <SlideShow slides={slides}></SlideShow>
            <h2 className='heading2'>{"You are not authorized to view this website \n\n because you have not confirmed your attendance\n\n"}</h2>
            <h2 className='heading2'>{"We would love to have you\n\n"}</h2>
            <h2 className='heading2'>{"Please send your confirmation to \n\n Christopher Garsia \n\n in order to be granted access\n\n\n\n"}</h2>
        </div>
    )
}

export default UnauthorizedScreen