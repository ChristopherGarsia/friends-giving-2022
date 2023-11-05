
import React, {useEffect, useState} from 'react'
import useSound from 'use-sound'
import harvestMoon from '../sounds/HarvestMoon.mp3'

function PersonalPage(props) {
    const [play] = useSound(harvestMoon)
    const [active, setActive] = useState(false)
    const titles = [
        'The Polar Plunge Planner', //Alexis
        'Co Head Chef', //Chris
        'Co Mixologist', //Drew
        'The Activation Specialist', //Elinor
        'Early Bird', //Kelly
        'Friendsgiving Facilitator', //Libby
        'The Game Guru', //Sam
        'Co Head Chef', //Thomas
        'Co Mixologist' //Will
    ]
    const titleDescription = [
        'You will be coordinating and planning our annual Tahoe plunge. Make sure everyone fights off the hypothermia with a beverage to warm the liver :)', 
        'You know what you\'re doing', 
        'You will be mixing drinks with Will Barber during, before and after the friendsgiving feast. Ensure everyone is socially lubricated for the evenings festivities with a variety of delicious cocktails', 
        'Your job covers many bases: \n\n1. You must help everyone stay activated,\n(get people dancing, hiking, drinking etc...) \n\n2. You must plan and coordinate the outdoor activity on Saturday \n\n3. Keep the atmosphere activated \n(if the tunes aren\'t fitting the mood change them, \nif people are cold make a fire, \nkeep it stokin\' ya feel?)',
        'TBD',
        'Your title gets you wearing many hats, but can be summarized as follows: \n\n-Plate the table before the meal \n\n-Be available for help in the kitchen as needed \n\n-Take photos of friendsgiving so we\'ve got some good ones for the memories (and to share with Maggie and Ben)',
        'Your job is plan, coordinate and execute the games. Preferably a fun mix of drinking games and "normal" games',
        'You know what you\'re doing', 
        'You will be mixing drinks with Drew Barber during, before and after the friendsgiving feast. Ensure everyone is socially lubricated for the evenings festivities, with a variety of delicious cocktails'
    ]
    const saturdayMeals = [
        ["Harvest Salad (ingredients will be supplied)"], 
        ["Turkey", "Mashed Potatoes", "Gravy", "Stuffing", "Veggies", "Soup", "Cranberry Sauce"], 
        ["Drinks (please coordinate with Will Barber to determine what mixed drink supplies + alcohol to bring up)"], 
        ["Breakfast", "Pumpkin Cornbread"], 
        ["Charcuterie Board Appetizer (please bring up fixings for a charcuterie board for Saturday evening and arrange as desired)"], 
        ["Mashed Potatoes (ingredients will be supplied)"], 
        ["Homemade Pies (please bake homemade pies to bring up to Tahoe)"], 
        ["Turkey", "Mashed Potatoes", "Gravy", "Stuffing", "Veggies", "Soup", "Cranberry Sauce"], 
        ["Drinks please coordinate with Drew Barber to determine what mixed drink supplies + alcohol to bring up)"]]
    const essentials = ['Sleeping Bag', 'Pillow', 'Towel', 'Bathing Suit', 'Warm Clothes (Average Temps 25°F-45°F)', 'Comfortable Walking Shoes', 'Friendsgiving Outfit']

    useEffect(() => {
        0 !== props.activeId ? setActive(true) : setActive(false)
        if (props.activeId - 1 == props.userId && props.songPlaying == false) {
            play()
            props.setSongPlaying(true)
        }
    }, [props.activeId])


    return (
        <div className='personalPage'>
            {active? 
                <div>
                    <h1 className='h1-name'>{props.labels[props.activeId]}</h1>
                    <div className='itemBox'>
                        <h2>{"\"" + titles[props.activeId - 1] + "\""}</h2>
                        <h2 className='descriptions'>{titleDescription[props.activeId - 1]}</h2>
                    </div>
                    {
                        saturdayMeals[props.activeId - 1]?.length > 0?
                        <div className='itemBox'>
                            <h2>What you're making Saturday:</h2>
                            {
                                saturdayMeals[props.activeId - 1].map(function(d) {
                                    return <h3>{"- " + d}</h3>
                                })
                            }
                        </div>
                        :
                        null
                    }
                    <div className='itemBox'>
                        <h2>Essentials to Bring to Chambers:</h2>
                        {
                            essentials.map(function(d) {
                                return <h3>{"- " + d}</h3>
                            })
                        }
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default PersonalPage