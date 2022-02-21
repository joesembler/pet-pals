import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import { Link } from 'react-router-dom'

function PetPal({petPals, species}) {

    const params = useParams()

    const [petPal, setPetPal] = useState({})


    
    const [happinessState, setHappinessState] = useState(10)
    const [healthState, setHealthState] = useState(10)

    useEffect(() => {
        setPetPal(petPals[params.id - 1])
    }, [petPals, params])

    useEffect(() => {
        setHealthState(petPal.health)
        setHappinessState(petPal.happiness)
    }, [petPal])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //      // console.log('This will run every second!');
    //     if(healthState > 0){
    //         var hp = healthState -1
    //         handleUpdate({ 
    //         health: hp
    //      })
    //      setHealthState(healthState -1)
    //     }
    //     if(happinessState > 0){
    //         var hp = happinessState-1
    //         handleUpdate({
    //             happiness: hp
    //          })
    //         setHappinessState(happinessState - 1)
    //     }
    //     }, 1000);
        
        
    //   }, []);



    function handleUpdate(obj){
        fetch(`/petpals/${params.id}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data => {
            setPetPal(data)
        })
    }

    function handleUpdateHappiness(){
        const fullHappiness = {
            happiness: 10
        }
        fetch(`/petpals/${params.id}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(fullHappiness)
        })
        .then(res => res.json())
        
        setHappinessState(10)
    }

    function handleUpdateHealth(){
        const fullHealth= {
            health: 10
        }
        fetch(`/petpals/${params.id}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(fullHealth)
        })
        .then(res => res.json())
        setHealthState(10)
    }
    
    

    
    // console.log("petPals: ", petPals,"params: ", params,"petPal: ", petPal, "health: ", petPal.health, "happiness: ", petPal.happiness)

    if(petPal){
        return (
            <div className='PetPal'>
                <div className="backButton">
                    <Link to={"/"}> 
                        <button>Back</button>
                    </Link>
                </div>
                <div className='PetPalName'>
                    <h1>{petPal.name}</h1>
                </div>
                <div className='PetPalHealth'>
                    <h2>Health: {petPal.health}</h2>
                    <h2>Happiness: {petPal.happiness}</h2>
                </div>
                <div className="PetPalFeedButton">
                    <button onClick={handleUpdateHealth}>Feed</button>
                </div>
                <div className="PetPalActivityButton">
                    <button onClick={handleUpdateHappiness}>Activity</button>
                </div>
            </div>
        )
    }

    // species[petPal.species_id-1].activity
    else{
        return(
            <div className="PetPal">
                <div className="backButton">
                    <Link to={"/"}> 
                        <button>Back</button>
                    </Link>
                </div>
                Loading
            </div>
        )
    }
}

export default PetPal;