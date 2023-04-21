import axios from 'axios';
import './App.css';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import About from './views/About';
import Home from './views/Home';
import Favorites from './views/Favorites'
import Detail from './views/Detail';

function App() {

   const [characters, setCharacters] = useState([]);
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      parseInt(id)
      setCharacters(characters.filter((character) => character.id !== id))
   }

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "usuario@email.com"
   const PASSWORD = "Password1"

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />

         <Routes>
            <Route path='/' element={<Form login = {login}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/detail/:id' element={<Detail/>}/> 
         </Routes>

      </div>
   );
}

export default App;
