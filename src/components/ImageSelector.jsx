import React, { useState, useEffect } from 'react'
import {Image} from './Image'
import boar from '../img/boar.png'
import dog from '../img/dog.png'
import elephant from '../img/elephant.png'
import giraffe from '../img/giraffe.png'
import hippo from '../img/hippo.png'
import panda from '../img/panda.png'
import rabbit from '../img/rabbit.png'
import rhino from '../img/rhino.png'
import sloth from '../img/sloth.png'

const animalImages = [
    { name: 'boar', path: boar },
    { name: 'dog', path: dog },
    { name: 'elephant', path: elephant },
    { name: 'giraffe', path: giraffe },
    { name: 'hippo', path: hippo },
    { name: 'panda', path: panda },
    { name: 'rabbit', path: rabbit },
    { name: 'rhino', path: rhino },
    { name: 'sloth', path: sloth }
]

export const ImageSelector = () => {
    const [isOpen, changeOpen] = useState(false)
    const [animalSrc, changeAnimalSrc] = useState(
        () => localStorage.getItem('animalSrc')
        )

    const handleClick = val => {
        changeOpen(false)
        changeAnimalSrc(val)
    }

    useEffect(() => {
        console.log('useEffect firing')
        if (animalSrc) {
            localStorage.setItem('animalSrc', animalSrc)
        }
    }, [animalSrc])

    return (
        <div id="image-selection" onClick={() => changeOpen(!isOpen)}>
            {animalSrc
                ? <img src={animalSrc} alt="profile pic" height="100" width="100" />
                : <div className="missing-prof-pic">?</div>
            }
            {isOpen && <section className="image-holder">
                {animalImages.map(({ name, path }) => (
                    <Image 
                        key={`img-${name}`} 
                        src={path} 
                        animal={name} 
                        handleClick={handleClick} 
                        isSelected={animalSrc === path}
                    />
                ))}
            </section>
            }

        </div>
    )
}
