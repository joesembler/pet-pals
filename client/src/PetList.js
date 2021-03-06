import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PetCard from './PetCard'
function PetList(props) {
    const [petPals, setPetPals] = useState([])
    const [species, setSpecies] = useState([])

    useEffect(() => {
        setPetPals(props.petPals)
        setSpecies(props.species)
    }, [props.petPals, props.species])

    if(petPals.length > 0 && species.length > 0){
        let petPalElements = [];
        petPals.forEach(petPal => {
            petPalElements.push(<PetCard key={petPal.id} petPal={petPal} species={props.species}/>)
        });

        return(
        <div className="PetList">
            <div className="BackButton">
                <Link to={"/"}>
                    <button>Back</button>
                </Link>
          </div>
            <div className="PetListElements">
                {petPalElements}
            </div>
            <div className="CreateButton">
                <Link to={"/create"}>
                    <button>+ Create A PetPal</button>
                </Link>
            </div>
        </div> 
    );
    }
    else{
        return (
            <div className="PetList">
                Loading...
            </div>
        )
    }
}

export default PetList;
