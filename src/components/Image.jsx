import React from 'react'

export default function Image(props) {
    return (
        <div className="image" onClick={() => props.handleClick(props.src)}>
            <img 
                src={props.src} 
                alt={`icon of a ${props.animal}`} 
                height="80" width="80" />
            {props.isSelected && <span className="check">&#10003;</span>}
        </div>
    )
}
