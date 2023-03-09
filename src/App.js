
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './view/Home';
import Contact from './view/Contact';
import About from './view/About';
import Galery from './view/Galery';
import Price from './view/Price';
import Navbar from './navbar/Navbar';

function App() {
  return (
<>
<Navbar/>
<Routes>
  <Route  path='/' element = {<Home/>}/>
  <Route  path='/about' element = {<About/>}/>
  <Route  path='/contact' element = {<Contact/>}/>
  <Route  path='/galery' element = {<Galery/>}/>
  <Route  path='/price' element = {<Price/>}/>


</Routes>
</>
  );
}

export default App;
