
import {useState, useEffect} from 'react'

function CreatePetForm(handlePost, errors, setFormData, userId) {

    const [speciesArray, setSpeciesArray] = useState([])
    console.log(userId)
    const [name, setName] = useState('')
    const [speciesSelected, setSpeciesSelected] = useState(1)
    const [img, setImg] = useState('app/assets/images/cat-clipart.svg')
    const [color, setColor] = useState('')

    function onSubmit(e){
        e.preventDefault()
        const petPal = {
          name: name,
          species_id: speciesSelected,
          color: color,
        }       
        setFormData(petPal)
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
            
         <img src = '/app/assets/images/cat-clipart.svg'/>
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
                <option value="grey" onClick={(e) => setColor(e.target.value)}>Grey</option>
                <option value="red" onClick={(e) => setColor(e.target.value)}>Red</option>
                <option value="orange" onClick={(e) => setColor(e.target.value)}>Orange</option>
                <option value="yellow" onClick={(e) => setColor(e.target.value)}>Yellow</option>
                <option value="green" onClick={(e) => setColor(e.target.value)}>Green</option>
                <option value="blue" onClick={(e) => setColor(e.target.value)}>Blue</option>
                <option value="purple" onClick={(e) => setColor(e.target.value)}>Purple</option>
            </select>
        </label>
       
        <input type="submit" value="Create PetPal!" />
      </form>
        </div>
    )
}

export default CreatePetForm;