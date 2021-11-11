
import React, {useEffect, useState} from 'react'

function PersonalPage(props) {
    const [active, setActive] = useState(false)
    const titles = ['Head Mixologist', 'Activation Specialist', 'Talk Turkey to Me', 'Head of Spread', 'Outdoor Operations Manager', 'Head of Game Selections', 'Serotonin Optimizer', 'Head of Game Deployment']
    const essentials = ['Bath Towel', 'Bathing Suit', 'Comfortable Walking Shoes', 'Warm Clothes for Stargazing']
    const tahoeMeals = [["Omelettes with Chris"], ["Soup", "Gravy with Chris"], ["Turkey with Elinor", "Gravy with Drew", "Stuffing with Thomas", "Cranberry Sauce"], ["Turkey with Chris"], ["Salad"], [], ["Mashed Potatoes"], ["Stuffing with Chris", "Breakfast Sandwhiches"]]
    const preTahoeMeals = [["Pie"], [], [], ["Surprise Dessert"], ["Pie"], [], [], []]
    const recipes = [
        [], 
        ["https://www.seriouseats.com/butterfiled-roast-turkey-with-gravy-recipe"], 
        ["https://www.seriouseats.com/butterfiled-roast-turkey-with-gravy-recipe", "https://www.seriouseats.com/the-food-lab-thanksgiving-special-the-worlds-easiest-cranberry-sauce", "https://www.bonappetit.com/recipe/simple-is-best-dressing"], 
        ["https://www.seriouseats.com/butterfiled-roast-turkey-with-gravy-recipe"], 
        [], 
        [], 
        ["https://www.seriouseats.com/ultra-fluffy-mashed-potatoes-recipe"], 
        ["https://www.seriouseats.com/the-food-lab-green-beans-haricots-verts-amandine"]
    ]

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
                        <h2>Essentials to Bring:</h2>
                        {
                            essentials.map(function(d) {
                                return <h3>{"- " + d}</h3>
                            })
                        }
                    </div>
                    {
                        tahoeMeals[props.activeId - 1]?.length > 0?
                        <div className='itemBox'>
                            <h2>Food to Cook in Tahoe:</h2>
                            {
                                tahoeMeals[props.activeId - 1].map(function(d) {
                                    return <h3>{"- " + d}</h3>
                                })
                            }
                        </div>
                        :
                        null
                    }
                    {
                        preTahoeMeals[props.activeId - 1]?.length > 0?
                        <div className='itemBox'>
                            <h2>Food to Bring to Tahoe:</h2>
                            {
                                preTahoeMeals[props.activeId - 1].map(function(d) {
                                    return <h3>{"- " + d}</h3>
                                })
                            }
                        </div>
                        :
                        null
                    }
                    {
                        recipes[props.activeId - 1]?.length > 0?
                        <div className='itemBox'>
                            <h2>Recipes</h2>
                            {
                                recipes[props.activeId - 1].map(function(d) {
                                    return (
                                        <div>
                                          <a href={d}>{d}</a>
                                          <br/> 
                                          <br/> 
                                        </div>
                                    )
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