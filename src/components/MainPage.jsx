import React, {useEffect, useState} from 'react'
import lastSupper from '../images/LastSupper.png'

function MainPage(props) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        0 === props.activeId ? setActive(true) : setActive(false)
    }, [props.activeId])


    return (
        <div className='mainPage'>
            {active? 
                <div>
                    <h1 className='heading'>Welcome to the Official Site for FriendsGiving 2021 Tahoe Edition</h1>
                    <img src={lastSupper}/>
                    <h2 className='heading2'>{"Hello " + props.user + "! Please use this site to learn more about the everyone's roles for this weekend"}</h2>
                    <h2 className='heading2'>You can also find your specific packing lists and meals within your tab</h2>
                    <h2 className='heading2'>Finally check out Elinor's spreadsheet below for additional recipes, meal breakdowns and more</h2>
                    <iframe className='frame' src="https://docs.google.com/spreadsheets/d/1ICSz06MBLBY0QCD-OqirNo8UMsDHWVxXjwljksyP7Kg/edit#gid=1078856610" title="Elinor's Spreadsheet"></iframe>
                </div>
                :   
                null
            }
        </div>
    )
}

export default MainPage