import React from 'react'

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
 p{
   max-width:500px;
 
   border: 1px solid white;
   text-align: center;
 
 margin : 25px;
 
 }
 @media screen and (max-width : 514px)
 {
   p{
     
     min-width:300px;
     margin : 95px;
     
   
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



</div>
    </div>
  </AboutStyle>
  )
}
