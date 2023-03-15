import React , {useState}from 'react'
import { Link } from 'react-router-dom'
import Logo from '..//img/Logo.jpeg'
import '..//navbar/nav.css';

export default function Navbar() {
 const [mobileMenu,setMobileMenu] = useState(false);
const handleShowLinks =() => {
  setMobileMenu(!mobileMenu)
}

  return (
    <nav className={`navbar ${mobileMenu ? "show_nav" :"hide_nav " } `}>
      
  
      <Link className='navbar_logo' to= "/" > <img src={Logo} height ='100px' width='100px' alt='logo du site'/></Link>
<ul className='navbar_links'>
        <Link  className ='navbar_link'to ="/" onClick={handleShowLinks}><li>Accueil</li> </Link>
        <Link className ='navbar_link' to ="/contact" onClick={handleShowLinks}><li> Nous contacter</li> </Link>
        <Link  className ='navbar_link'to ="/price" onClick={handleShowLinks}> <li>Tarifs et prestations</li></Link>
        <Link  className ='navbar_link'to ="/galery" onClick={handleShowLinks}><li>Galerie </li> </Link>
      
</ul>
<button className='navbar_burger' onClick={handleShowLinks}>

  <span className='burger_bar'></span>
</button>
    
    </nav>
  )
}
