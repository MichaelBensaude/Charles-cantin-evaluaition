import React from 'react'
import styled from 'styled-components'
/**Mettre une condition si adresse mail valide ou non  */





export default function Contact() {
  const FontStyle = styled.div `
  .container-form{
    margin: 200px;
    color:black;
    background-color: white;
    border-radius:5%;
    width: 500px;
    height: 720px;
    
  }
  form{
    
    text-align:center;
    display : flex;
    justify-content : center;
    font-size: 24px;
    
  }
  input{
    height: 30px;
    width: 280px;
  }
  textarea{
    
    min-width : 200px;
    min-height : 200px;
    max-width : 390px;
    max-height : 220px;
  }
  label {
    margin-top:10px;
    display:block;
  }
  label.inline {
    display:inline;
    margin-right:50px;
  }
  @media screen and (max-width : 873px){
    .container-form{
      
      width: 300px;
      height: 520px;
      
      
    }
    
    form{
      
      font-size: 14px;
      
    }
    input{
      height: 10px;
      width: 180px;
    }
  }
  
  
  
  
  `

      return (
        <>
      <FontStyle>
      <form name="contact" method="post" data-netlify ="true" onSubmit="submit">
      <input type="hidden"  name="form-name" value="contact" />
      <div className='container-form'>
      
      <div>
      <label for ="name"> Prénom : </label>
      <input type="text" id="firstname" name="firstname"  placeholder='John' required/>
      </div>
      <div>
      <label for ="name"> Nom : </label>
      <input type="text" id="name" name="name"   placeholder='Doe' required/>
      </div>
      <div>
      
      <label for="select"> Votre demande concerne :</label>
      
      <select name="select" id="choice-select" required>
      <option value="">Merci de choisir parmis les choix suivant </option>
      <option value="Demande de devis">Demande de devis</option>
      <option value="Demande particulière">Demande particulière</option>
      <option value=" Annulation de rdv">Annulation de rdv</option>
      <option value="Retrait de photo de la galerie">Retrait de photo de la gallerie </option>
      
      </select>
      <label for ="mail"> E-mail:&nbsp;</label>
      <input type="email" id="mail" name="email"   placeholder='exemple@email.com' required/>
      </div>
      <div>
      <label for ="message"> Message : </label>
      <textarea id="msg"  name="message"   placeholder='Votre texte ici ...' required/>
      </div>
      
      <button type="submit" > Envoyé </button>
      
      </div>
      </form>
      </FontStyle>
      
      </>
      )
    }
