import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function AddCharacterForm({characters, setCharacters, API}) {

    const history = useHistory();

    const [newForm, setNewForm] = useState({
        character: "",
        nickname: "",
        hogwartsHouse: "",
        interpretedBy: "",
        spell: "",
        use: "",
        child: ""
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(API, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newForm)
        })
        .then(res => res.json())
        .then(newData => setCharacters([...characters, newData]))
        history.push("/");
    }

  return (
    <div className="ui segment">
        <form onSubmit={handleSubmit} className="ui form">
            <div className="inline fields">
                <input value={newForm.character} onChange={handleChange} type="text" name="character" placeholder="Character Name" /> <br />
                <input value={newForm.nickname} onChange={handleChange} type="text" name="nickname" placeholder="Nickname"/> <br />
                <input value={newForm.hogwartsHouse} onChange={handleChange} type="text" name="hogwartsHouse" placeholder="Hogwarts House"/> <br />
                <input value={newForm.interpretedBy} onChange={handleChange} type="text" name="interpretedBy" placeholder="Interpreted By"/> <br />
                <input value={newForm.spell} onChange={handleChange} type="text" name="spell" placeholder="Spell"/> <br />
                <input value={newForm.use} onChange={handleChange} type="text" name="use" placeholder="Use"/> <br />
                <input value={newForm.child} onChange={handleChange} type="text" name="child" placeholder="Child"/> <br />
                <input value={newForm.image} onChange={handleChange} type="text" name="image" placeholder="Image URL" /> <br /> 
                <input type="submit" value="Add Character" /> <br />
            </div>
        </form>
    </div>
  )
}

export default AddCharacterForm;