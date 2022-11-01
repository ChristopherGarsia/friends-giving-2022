
import React, {useEffect, useState} from 'react'

function PersonalPage(props) {
    const [active, setActive] = useState(false)
    const tabs = ['Main', 'Libby', 'Elinor', 'Chris', 'Thomas', 'Sam', 'Dawson', 'Julian', 'Danielle', 'Leon', 'Colter', 'Ashley']
    const titles = ['Head of Lodging', 'Sourcer of Sources', 'Kitchen Director', 'VP Logistrator', 'Co Adventure Coordinator', 'Quality Assurance', 'Co Adventure Coordinator', 'Garner of Games', 'Resident Resident', 'Co Activation Specialist', 'Co Activation Specialist']
    const essentials = ['Bathing Suit', 'Warm Clothes (Average Temps 20F-30F)', 'Comfortable Walking Shoes', 'Friendsgiving Outfit']
    const parkCityMeals = [["Crispy Potato Skins"], ["Homeamde Butter", "Turkey", "Gravy"], ["Turkey", "Stuffing"], ["Green Beans"], ["Cranberry Sauce"], ["Mashed Potatoes"], ["Salad"], ["Salad"], ["Cocktails"]]
    

    useEffect(() => {
        0 !== props.activeId ? setActive(true) : setActive(false)
    }, [props.activeId])


    return (
        <div className='personalPage'>
            {active? 
                <div>
                    <h1>{props.labels[props.activeId]}</h1>
                    <h2>{"Title: " + titles[props.activeId - 1]}</h2>
                    <br/>
                    <div className='itemBox'>
                        <h2>Essentials to Bring to Park City:</h2>
                        {
                            essentials.map(function(d) {
                                return <h3>{"- " + d}</h3>
                            })
                        }
                    </div>
                    {
                        parkCityMeals[props.activeId - 1]?.length > 0?
                        <div className='itemBox'>
                            <h2>What you're making Saturday:</h2>
                            {
                                parkCityMeals[props.activeId - 1].map(function(d) {
                                    return <h3>{"- " + d}</h3>
                                })
                            }
                        </div>
                        :
                        null
                    }
                </div>
                :
                null
            }
        </div>
    )
}

export default PersonalPage