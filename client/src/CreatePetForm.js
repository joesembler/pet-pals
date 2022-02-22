import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function CreatePetForm({handlePost, errors}) {

    const [speciesArray, setSpeciesArray] = useState([])
    const [name, setName] = useState('')
    const [speciesSelected, setSpeciesSelected] = useState(1)
    const [color, setColor] = useState('black')
    const [userId, setUserId] = useState(0)

    useEffect(() => { 
        fetch("/authorized_user")
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((user) => {
              setUserId(user.id)
            });
          }
        });
      },[]);

    function onSubmit(e){
        e.preventDefault()
        const petPal = {
          name: name,
          species_id: speciesSelected,
          user_id: userId,
          health: "10",
          happiness: "10",
          color: color,
        }       
        console.log(petPal)
        handlePost(petPal)
      }


    useEffect(() => {
        fetch("/species")
        .then(r=>r.json())
        .then(data => {
            setSpeciesArray(data)
        })
    }, [])

     
    return (
        <div className='CreatePetForm'>
          <div className="BackButton">
                <Link to={"/"}>
                    <button>Back</button>
                </Link>
          </div>
             {errors?errors.map(e => <div>{e}</div>):null}

         
            <img src={`../images/${color + speciesSelected}.PNG`}/>


            <form onSubmit={onSubmit}>
        <label>
          Name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
            Species
        <select name="species" onChange = {(e) => {setSpeciesSelected(e.target.value)}}>
            {speciesArray.length > 0 ? speciesArray.map(s => {
                return(
                    <option value = {s.id}>{s.name}</option>
                );
            }) : null}
        </select>
        </label>
        <label>
            Color
            <select name='color' onClick={(e) => setColor(e.target.value)}>
                <option value="black" onClick={(e) => setColor(e.target.value)}>Black</option>
                <option value="white" onClick={(e) => setColor(e.target.value)}>White</option>
                <option value="red" onClick={(e) => setColor(e.target.value)}>Red</option>
                <option value="orange" onClick={(e) => setColor(e.target.value)}>Orange</option>
                <option value="green" onClick={(e) => setColor(e.target.value)}>Green</option>
                <option value="blue" onClick={(e) => setColor(e.target.value)}>Blue</option>
            </select>
        </label>
       
        <input type="submit" value="Create PetPal!"/>
      </form>
        </div>
    )
}

export default CreatePetForm;