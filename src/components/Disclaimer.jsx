import React from 'react'

export const Disclaimer = (props) => (
    <section> 
        None of the authors, contributors, administrators, vandals, or anyone 
        else connected with Social Media for Animals, in any way whatsoever, 
        can be responsible for {props.name || 'your'} emotional damage or loss 
        of free time.
    </section>
)