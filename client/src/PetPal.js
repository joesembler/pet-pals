import React from 'react'

function PetPal({petPal, species}) {

    console.log(petPal.name)

    return (
        <div className='PetPal'>
            <h1>{petPal.name}</h1>
        </div>
    )
}

export default PetPal;