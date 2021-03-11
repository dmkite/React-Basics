import React, {Fragment} from 'react'

export const Input = props => {
    return (
        <Fragment>
            <label htmlFor="name-input">Enter your name below:</label>
            <input 
                id="name-input" 
                type="text" 
                placeholder="e.g. Mr. Whiskers" 
                onChange={e => props.handleChange(e.target.value)}
                value={props.value}
            />
        </Fragment>
    )
}
