import React, {useState} from 'react'

export const Signup = () => {
    const [isChecked, changeCheck] = useState(false)
    return (
        <>  
        <button disabled={!isChecked}>Sign up</button>
        <label className="age-check">
            <input type="checkbox" onChange={() => changeCheck(!isChecked)} />
            I am at least 13 years old
        </label>
        </>
    )
}