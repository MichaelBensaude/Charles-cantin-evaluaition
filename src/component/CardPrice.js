import React from 'react'
import styled from 'styled-components'


const PrestationStyle =  styled.div  `
.card-container {
    display:flex;
  
    height: 700px;
    width: 500px;
    margin: 10rem;

}

}
.card {

    height: 100%;
    width: 100%;  
 
}

}
img {
    border-radius:10%;
    width: 90%;
    height: 90%;
      margin : auto;

}



p,h3 {
  text-decoration : underline;
font-size : 14px;
    text-align: center;
}


}
@media screen and (max-width : 1920px){
  .card-container{
    height: 700px;
    width: 500px;
    margin: 10rem;
   
    margin-top :8rem;
  }
  }


@media screen and (max-width : 820px){
  .card-container{

    height: 400px;
    width: 300px;

    margin: 2rem;
   
    margin-top :8rem;
  }
  }
  


`
export default function CardPrice({src, alt,title,text,link}) {
  return (



   <PrestationStyle>
   <div class="card-container">
            <div class="card">
                
                <img src ={src} alt={alt}/>
              
              <div className='content-prestation'>

                    <h3 href ={link}>{title} </h3>
                <p> {text}</p>
              </div>
            
            </div>
        </div>



   </PrestationStyle>
  )
}