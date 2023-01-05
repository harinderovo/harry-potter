import React from 'react';
import Character from './Character';

function CharacterList({characters}) {

    const charactersList = characters.map(singleCharacter => 
    <Character singleCharacter={singleCharacter} key={singleCharacter.id} />)


    return (
        <div className="CharacterList" >
            <ul className="Characters">
                {charactersList} 
            </ul>
        </div>
    )
}

export default CharacterList;