import React, {useState} from 'react';

export const SignUpButton = () => {
    const [state, setState] = useState(false);
    const handleChange = e => setState(!state)
    return (
        <input 
            type="checkbox" 
            checked={state} 
            onChange={handleChange} />
    )
}

