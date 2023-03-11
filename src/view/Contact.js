import React from 'react'
import styled from 'styled-components'
/**Mettre une condition si adresse mail valide ou non  */
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
export default function Contact() {
  return (
    <FontStyle>

<form name="contact" method="POST" data-netlify="true" onSubmit="submit">
    <div className='container-form'>
  
  <div>
<label for ="name"> Prénom : </label>
    <input type="text" id="firstname" name="user_firstname" placeholder='John' required/>
  </div>
  <div>
<label for ="name"> Nom : </label>
    <input type="text" id="name" name="user_name" placeholder='Doe' required/>
  </div>
  <div>

  <label for="pet-select"> Votre demande concerne :</label>

<select name="choice" id="coice-select" required>
    <option value="">Merci de choisir parmis les choix suivant </option>
    <option value="devis">Demande de devis</option>
    <option value="particulier">Demande particulière</option>
    <option value="rdv">Annulation de rdv</option>
    <option value="retrait">Retrait de photo de la gallerie </option>
    
</select>
<label for ="mail"> E-mail:&nbsp;</label>
    <input type="email" id="mail" name="user_mail" placeholder='exemple@email.com' required/>
  </div>
  <div>
  <label for ="message"> Message : </label>
    <textarea id="msg"  name="user_message" placeholder='Votre texte ici ...' required/>
  </div>

      <button type="submit" > Envoyé </button>
    
    </div>
</form>
    </FontStyle>

  )
}