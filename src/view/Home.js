import React from 'react'
import styled from 'styled-components'

export default function Home() {
const HomeStyle = styled.div`
.container{
  display:grid;
  place-items : center;
  height : 100vh;

} 
h2 {
  font-family: 'Fjalla One', sans-serif;
  color:white;

  
  font-size : 96px; 
}

@media screen and (max-width: 1185px) {
  h2 {
    font-size: 74px;
}
@media screen and (max-width: 935px) {
  h2 {
    font-size: 54px;
}
@media screen and (max-width: 750px) {
  h2 {
    font-size: 34px;
}

}
`
return (
<HomeStyle>

  <div className='container'>
<h2>
Charles cantin
<br/> photographe
</h2>
  </div>
</HomeStyle>
  )
}
