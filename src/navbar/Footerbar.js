import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar/footer.css';
import styled from 'styled-components';




export default function Footerbar() {
const StyleItems = styled.div `
.navbar_items{

display : flex;

}
li{
padding: 5px;
font-size: 16px;
}
`
return (
<div className='footer_wrapper'>
    <div className='footer_container'>
<StyleItems>

<ul className='navbar-links'>

        <Link  to ="/"> <li> Accueil </li></Link>
        <Link  to ="/contact"> <li> Nous contacter </li></Link>
        <Link  to ="/price"><li> Tarifs et prestations </li></Link>
        <Link  to ="/galery"> <li> Galerie </li> </Link>
    
</ul>
    
</StyleItems>
    </div>
    <div className='footer_container'>
<StyleItems>

<ul className='navbar-links'>
<Link  className ='navbar_items'to ="/about"> <li> à propos </li> </Link>
</ul>
</StyleItems>
</div>
</div >
  )
}
