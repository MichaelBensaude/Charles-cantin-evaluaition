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
        <Link  className ='navbar_items'to ="/about"> A propos</Link>
</StyleItems>
    </div>
    <div className='footer_container'>
<StyleItems>

<Link  className ='navbar_items'to ="cgv"> CGV</Link>
<Link className ='navbar_items' to ="/history"> histoire de l'entrprise  </Link>
<Link  className ='navbar_items'to ="/devis"> demander un devis</Link>
<Link  className ='navbar_items'to ="/where_are_us"> ou sommes nous </Link>
</StyleItems>
</div>
</div >
  )
}
