import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import NavBar from './components/NavBar';
import Search from './components/Search';
import {Route, Switch} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import AddCharacterForm from './components/AddCharacterForm';
import Character from './components/Character';


const API="http://localhost:3000/characters"

function App() {

  const [characters, setCharacters] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  const filteredCharacters= characters.filter(char => (
    char.character.toLowerCase().includes(search.toLowerCase()) || 
    char.nickname.toLowerCase().includes(search.toLowerCase()) ||
    char.spell && char.spell.toLowerCase().includes(search.toLowerCase()) ||
    char.hogwartsHouse && char.hogwartsHouse.toLowerCase().includes(search.toLowerCase()) ||
    char.use && char.use.toLowerCase().includes(search.toLowerCase()) 
    ))

  return (
    <div className="App">
      <NavBar characters={characters} setCharacters={setCharacters} API={API} />
      <Switch>
        <Route exact path="/characters/new">
          <AddCharacterForm setCharacters={setCharacters} characters={characters} API={API}/>
        </Route>
        <Route exact path="/characters/:id">
          <Character />
        </Route>
        <Route exact path="/">
        <Search search={search} setSearch={setSearch} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
