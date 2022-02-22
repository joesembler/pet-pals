import React, { useEffect, useState, useRef } from 'react'
import { useParams } from "react-router"
import { Link } from 'react-router-dom'

function PetPal({petPals, species}) {

    const params = useParams()
    const [petPal, setPetPal] = useState({})
    const counterRef = useRef(petPal)

    // const [healthState, setHealthState] = useState(petPal.health)

   // let happinessVar = 10;
    //let healthVar = 10;
    useEffect(() => {
        setPetPal(petPals[params.id - 1])
        //setCounter(1)
    }, [])
    useEffect(() => {
        counterRef.current = petPal;
      }, [petPal])
    //const [happinessState, setHappinessState] = useState(petPal.happiness)
   // console.log(happinessState)
    // useEffect(() => {
    //     setHealthState(petPal.health)
    //     setHappinessState(petPal.happiness)
    // }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            let current = counterRef.current
            let happinessVar = current.happiness -1
            fetch(`/petpals/${params.id}`,
            {
                method:'PATCH',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({happiness: happinessVar})
              })
              .then(res => res.json())
              .then(data => {
                 setPetPal(data)
              })
        return () => clearInterval(interval);
        }, 4000);
    }, [counterRef]);
      
    useEffect(() => {
        const interval = setInterval(() => {
            let current = counterRef.current
            let healthVar = current.health -1
            fetch(`/petpals/${params.id}`,
            {
                method:'PATCH',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({health: healthVar})
              })
              .then(res => res.json())
              .then(data => {
                 setPetPal(data)
              })
        return () => clearInterval(interval);
        }, 6000);
    }, [counterRef]);



    // function handleUpdate(obj){
    //     fetch(`/petpals/${params.id}`,{
    //       method:'PATCH',
    //       headers: {'Content-Type': 'application/json'},
    //       body:JSON.stringify(obj)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         setPetPal(data)
    //         console.log(obj)
    //         console.log(data)
    //     })
    // }

    function handleUpdateHappiness(){
      //  happinessVar = 10
        const fullHappiness = {
            happiness: 10
        }
        fetch(`/petpals/${params.id}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(fullHappiness)
        })
        .then(res => res.json())
        .then(data => {
            setPetPal(data)
        })
       
    }

    function handleUpdateHealth(){
      //  healthVar = 10
        const fullHealth= {
            health: 10
        }
        fetch(`/petpals/${params.id}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(fullHealth)
        })
        .then(res => res.json())
        .then(data => {
            setPetPal(data)
        })
    }
    
    

    
    //console.log("petPals: ", petPals,"params: ", params,"petPal: ", petPal, "health: ", healthVar, "happiness: ", happinessVar)

    if(petPal){
        return (
            <div className='PetPal'>
                <div className="BackButton">
                    <Link to={"/"}> 
                        <button>Back</button>
                    </Link>
                </div>
                <div className='PetPalName'>
                    <h1>{petPal.name}</h1>
                </div>
                <img id="petPalImage"src={`../images/${petPal.color + petPal.species_id}.PNG`}/>
                <div className='PetPalHealth'>
                    <h2>Health: {petPal.health >=0 ? petPal.health : null}</h2>
                    <h2>Happiness: {petPal.happiness }</h2>
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