import React from 'react'
import Iframe from 'react-iframe'
import styled from 'styled-components'

export default function About() {

const AboutStyle = styled.div `
.wrapper{

 display:flex;
 justify-content: center;
 align-items:center;
 flex-direction : column;
}
.container{
margin: 10rem;

}
.paragraphe{

margin : 10px;
max-width: 800px;
}

@media screen and (max-width: 368px) {
.paragraphe {
min-width : 150px;

}


}

`
  return (
  <AboutStyle>
<div className='wrapper'>
    <div className='container'>

<div className='paragraphe'>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur metus neque, iaculis vel cursus iaculis, ultrices a quam. In vitae ex lorem. Nunc a nisl erat. Aenean molestie congue dui non ultrices. Proin volutpat vel velit vitae maximus. Vestibulum condimentum tortor at dapibus lacinia. Nulla sit amet risus dictum, facilisis tortor eu, accumsan magna. Nunc ut justo at risus dictum convallis sed nec risus. Vivamus ut ex id eros eleifend accumsan.

Morbi ac metus vitae leo tincidunt interdum. Etiam pharetra, lorem a viverra tempor, nunc nulla auctor ipsum, id iaculis elit nulla sit amet tortor. In augue ipsum, aliquet sit amet risus vel, suscipit interdum est. In nec tristique arcu. Sed fringilla posuere leo, a ornare sem finibus eu. Aliquam dapibus auctor justo sit amet feugiat. Sed a urna consectetur, ornare neque at, gravida dui. Nullam non aliquam orci. Sed ornare arcu a rhoncus ultrices. Etiam elementum tellus nibh, dignissim semper leo tincidunt sit amet. Quisque laoreet sed magna at porta. Nulla id neque pharetra, venenatis lorem cursus, laoreet lorem. Nam molestie magna nisi, et iaculis enim semper sagittis. Praesent cursus semper fermentum. Proin luctus dictum metus, nec feugiat sem sollicitudin sed.
</p>
</div>
<div className='paragraphe'>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur metus neque, iaculis vel cursus iaculis, ultrices a quam. In vitae ex lorem. Nunc a nisl erat. Aenean molestie congue dui non ultrices. Proin volutpat vel velit vitae maximus. Vestibulum condimentum tortor at dapibus lacinia. Nulla sit amet risus dictum, facilisis tortor eu, accumsan magna. Nunc ut justo at risus dictum convallis sed nec risus. Vivamus ut ex id eros eleifend accumsan.

Morbi ac metus vitae leo tincidunt interdum. Etiam pharetra, lorem a viverra tempor, nunc nulla auctor ipsum, id iaculis elit nulla sit amet tortor. In augue ipsum, aliquet sit amet risus vel, suscipit interdum est. In nec tristique arcu. Sed fringilla posuere leo, a ornare sem finibus eu. Aliquam dapibus auctor justo sit amet feugiat. Sed a urna consectetur, ornare neque at, gravida dui. Nullam non aliquam orci. Sed ornare arcu a rhoncus ultrices. Etiam elementum tellus nibh, dignissim semper leo tincidunt sit amet. Quisque laoreet sed magna at porta. Nulla id neque pharetra, venenatis lorem cursus, laoreet lorem. Nam molestie magna nisi, et iaculis enim semper sagittis. Praesent cursus semper fermentum. Proin luctus dictum metus, nec feugiat sem sollicitudin sed.

</p>
</div>

<div className='maps'>

<Iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.1597504360484!2d-1.5431736842949229!3d43.49900287040562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd516aed323314cf%3A0xb37f0835fa434475!2sChambre%20d&#39;Amour!5e0!3m2!1sfr!2sfr!4v1677790948452!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
</div>

</div>
    </div>
  </AboutStyle>
  )
}
