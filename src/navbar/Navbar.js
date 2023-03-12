import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.jpeg'
import '..//navbar/nav.css';

export default function Navbar() {
 
  return (
    <nav className='navbar'>

        <Link className='navbar_logo' to= "/" > <img src={Logo} height ='100px' width='100px' /></Link>
        <Link  className ='navbar_items'to ="/"> Accueil</Link>
        <Link className ='navbar_items' to ="/contact"> Nous contacter </Link>
        <Link  className ='navbar_items'to ="/price"> Tarifs et prestations</Link>
        <Link  className ='navbar_items'to ="/galery"> Galerie </Link>
      
        <button className='navbar_burger'>

          <span  className='burger-bar'/>
        </button>
    
    </nav>
  )
}
