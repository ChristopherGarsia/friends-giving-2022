import React, {useEffect, useState} from 'react'

function LoginBox(props) {
    const [password, setPassword] = useState(null)
    const [invalidPassword, setInvalidPassword] = useState(false)

    const validPasswords = ["glina1999", "reckers1999", "chan1998", "breaux1999", "floyd1998", "garsia1999", "reynolds1999", "dunne1998", "mckinstry1999", "dunne2000", "carton2000"]

    const passwordsToUser = new Map([["glina1999", "Jujy"], ["reckers1999", "D Dog"], ["garsia1999", "Chris"], ["floyd1998", "E Monster"], ["breaux1999", "Leon the Prof"], ["reynolds1999", "Sambo"], ["dunne1998", "Libster"], ["mckinstry1999", "Thomas the Tank"], ["carton", "Colt45"], ["dunne2000", "Trashley"] ])

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

