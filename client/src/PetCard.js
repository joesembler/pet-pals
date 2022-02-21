import React from 'react'
import { Link } from 'react-router-dom';

function PetCard(props) {
    console.log(props)
    return(
        <div className="Player">
            
            <Link to={`/petpals/${props.petPal.id}`}>
            <svg height="150" width="350">
            
                <rect width="1080" height="1080" fill={props.petPal.color} />
                <text fill="black" fontSize="30" fontFamily="Sans-serif" x="20" y="37">{props.petPal.name}</text>
                <text fill="white" fontSize="30" fontFamily="Sans-serif" x="18" y="35">{props.petPal.name}</text>


                
                <text fill="white" fontSize="20" fontFamily="Sans-serif" x="165" y="75">Species:</text>
                <text fill="white" fontSize="20" fontFamily="Sans-serif" x="145" y="100">{props.species[props.petPal.species_id - 1].name}</text>
            </svg> 
            </Link> 
        </div>
    )
}

export default PetCard;
