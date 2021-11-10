import React, {useEffect, useState} from 'react'

function LoginBox(props) {
    const [password, setPassword] = useState(null)
    const [invalidPassword, setInvalidPassword] = useState(false)

    const validPasswords = ["baillie", "barber", "garsia", "floyd", "strand", "reynolds", "dunne", "mckinstry"]

    const passwordsToUser = new Map([["baillie", "Alexis"], ["barber", "Andrew"], ["garsia", "Chris"], ["floyd", "Elinor"], ["strand", "Kelly"], ["reynolds", "Sampson"], ["dunne", "Elizabeth"], ["mckinstry", "Thomas the Tank"]])

    function validatePassword(event) {
        if (password !== null) {
            if (validPasswords.includes(password.toLowerCase()))
            {
                setInvalidPassword(false)
                props.setUser(passwordsToUser.get(password.toLowerCase()))
                console.log(passwordsToUser)
                console.log(password.toLowerCase())
                console.log(passwordsToUser.get(password.toLowerCase))
                props.setLoggedIn(true)
            }
            else {
                setInvalidPassword(true)
            }
        }
        else {
            setInvalidPassword(true)
        }
    }

    function handleChange(event) {
        setPassword(event.target.value)
    }


    return (
    <div className="inner-container">
        <div className="header">
        Login
        </div>
        <div className="box">
            <div className="input-group">
                <input 
                    type="password" 
                    name="password"
                    className="login-input" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(event) => handleChange(event)}
                />
                {
                    invalidPassword?
                    <label>Incorrect Password</label>
                    :
                    null
                }
            </div>
            <button
                type="button"
                className="login-btn"
                onClick={validatePassword}
                >Login
            </button>
        </div>
    </div>
    );
}

export default LoginBox

