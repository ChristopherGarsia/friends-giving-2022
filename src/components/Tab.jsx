import React, {useEffect, useState} from 'react'
import useSound from 'use-sound'
import boop from '../sounds/Boop.mp3'

function Tab(props) {
    const [play] = useSound(boop)
    const [name, setName] = useState('label')

    useEffect(() => {
        props.id === props.activeId ? setName('labelActive') : setName('label')
    }, [props.activeId])

    return (
        <div className='tab'>
            <h1 className={name} onClick={ () => play() & props.setActiveId(props.id)}>{props.label}</h1>
        </div>
    )
}

export default Tab