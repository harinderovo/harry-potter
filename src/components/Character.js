import React, { useState, useEffect } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom';

function Character({singleCharacter}) {
    const location = useLocation(); 
    const {id} = useParams()
    const [char, setChar] = useState(null)
    const [showImage, setShowImage] = useState(true)

    useEffect(() => {
        if (!singleCharacter) {
            fetch(`http://localhost:3000/characters/${id}`)
            .then(res => res.json())
            .then(charObj => setChar(charObj))
            .catch(err => alert(err))
        }
    }, [singleCharacter, id])

    const finalChar = !char ? singleCharacter : char 

    if (!finalChar) {
        return <h3>Loading...</h3>
    }
  return (
    <div className="Character" id={finalChar.id}>
        <li>
            {location.pathname === "/" ? (<>
                <Link to={`/characters/${finalChar.id}`}><h4>{finalChar.character}</h4></Link>
                <img src= {finalChar.image} alt={finalChar.character} /> <br />
            </>) : ( <>

                <h4>{finalChar.character}</h4>
                <img src= {finalChar.image} alt={finalChar.character} /> <br />
                <span className="card-detail">Nickname: {finalChar.nickname} </span> <br />
                <span className="card-detail">HogwartsHouse: {finalChar.hogwartshouse} </span> <br />
                <span className="card-detail">InterpretedBy: {finalChar.interpretedby} </span> <br />
                <span className="card-detail">Spell: {finalChar.spell} </span> <br />
                <span className="card-detail">Use: {finalChar.use} </span> <br />
                <span className="card-detail">Child: {finalChar.child !== [] ? finalChar.child : "No Child"} </span> <br />
                </>)}
        </li>
    </div>
  )
}

export default Character;