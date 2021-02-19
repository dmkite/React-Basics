import React from 'react'

export default function Input(props) {
    return (
        <div>
            <label htmlFor="name-input">Enter your name below:</label>
            <input 
                id="name-input" 
                type="text" 
                placeholder="e.g. Mr. Whiskers" 
                onChange={e => props.handleChange(e.target.value)}
                value={props.value}
            />
        </div>
    )
}
