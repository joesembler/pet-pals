import React from 'react'
import { Link } from 'react-router-dom';

function PetCard(props) {
    console.log(props)
    return(
        <div className="PetCard">
            
            <Link to={`/petpals/${props.petPal.id}`>
            <svg height="150" width="350">
            
                <rect width="1080" height="1080" fill="#84ceeb" />
                <text fill="black" fontSize="30" fontFamily="Sans-serif" x="200" y="77">{props.petPal.name}</text>
                <text fill="white" fontSize="30" fontFamily="Sans-serif" x="198" y="75">{props.petPal.name}</text>


                <image x="25"y="-15" width="130" href={`../images/${props.petPal.color + props.petPal.species_id}.PNG`}></image>
            </svg>
                
            </Link> 
        </div>
    )
}

export default PetCard;
