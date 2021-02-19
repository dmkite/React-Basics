import React from 'react'

export default function Title(props) {
    {/* Apply animated font using "cool-font" class */}
    return <h1 className={props.title.length > 10 ? 'cool-font' : ''}>
        {props.title || 'Place Holder Title'}
    </h1>
}
