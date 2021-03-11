import React from 'react'

export const Title = props => {
    return <h1 className={props.title.length > 10 ? 'cool-font' : ''}>
        {props.title || 'Place Holder Title'}
    </h1>
}


