import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar/footer.css';
import styled from 'styled-components';




export default function Footerbar() {
const StyleItems = styled.div `
.navbar_items{

display : flex;
}

`
return (
<div className='footer_wrapper'>
    <div className='footer_container'>
<StyleItems>

        <Link  className ='navbar_items'to ="/"> Accueil</Link>
        <Link className ='navbar_items' to ="/contact"> Nous contacter </Link>
        <Link  className ='navbar_items'to ="/price"> Tarifs et prestations</Link>
        <Link  className ='navbar_items'to ="/galery"> Galerie </Link>
    
</StyleItems>
    </div>
    <div className='footer_container'>
<StyleItems>

<Link  className ='navbar_items'to ="/about"> à propos</Link>
</StyleItems>
</div>
</div >
  )
}
