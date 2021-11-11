
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
        ["https://www.seriouseats.com/the-food-lab-green-beans-haricots-verts-amandine", "https://www.bonappetit.com/recipe/simple-is-best-dressing"]
    ]

    const SamFood = ["7 yellow onions",
        "3 carrots",
        "8 stalks celery",
        "1 orange",
        "Baby bella mushrooms",
        "Fresh Tomatoes",
        "6 russet potatoes",
        "1 Baguette"
        ]

    const ThomasFood = [
        "40 eggs",
        "2 loaves of bread",
        "3 bell peppers",
        "2 dozen bagels",
        "1 cinnamon stick",
        "Cholula",
        "12 ounce (340g) fresh cranberries",
        "1/2 cup of flat leaf parsley",
        "1 bushel fresh sage",
        "1 bushel rosemary",
        "12 thyme sprigs",
        "Green Bean Fixings",
        "Beer"
    ]

    const ChrisFood = [
        "Turkey",
        "3 cups whole milk",
        "1 block cheddar cheese",
        "4 sticks unsalted butter",
        "1 pound of GF bread",
        "9 cups low sodium chicken broth"
    ]

    const shoppingList = [[], [], ChrisFood, [], ["Ingredients for your Favorite Salad!"], ThomasFood, SamFood, ThomasFood]
    

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
                        shoppingList[props.activeId - 1]?.length > 0?
                        <div className='itemBox'>
                            <h2>Shopping List:</h2>
                            {
                                shoppingList[props.activeId - 1].map(function(d) {
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