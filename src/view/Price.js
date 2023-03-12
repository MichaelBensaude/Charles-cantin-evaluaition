import React from 'react'

import CardPrice from '../component/CardPrice';
import styled from 'styled-components';
import  Pregnancy from '../img/Prestation_img/Pregnancy.jpeg'
import Alone from '../img/Prestation_img/alone.jpeg'
import  Familly from '../img/Prestation_img/Familly.jpeg'
import Weeding from '../img/Prestation_img/Weeding.jpeg'
import  Baby from '../img/Prestation_img/Baby.jpeg'
import  Friend from '../img/Prestation_img/Friend.jpeg'
const PositionCard = styled.div `

  display:flex;
  justify-content: space-around;
  flex-direction : row;
  flex-wrap: wrap;
  margin : auto:



`


export default function Price({src, alt, title , text }) {
  return (
    <>

 <PositionCard>
<CardPrice
src = {Alone}
alt = 'personne seul'
title = '« Juste moi » 130 euros'
text  = 'Séance pour une personne, en extérieur ou en studio'
link = '#'

/>
<CardPrice
src = {Friend}
alt = 'photo de deux amis'
title = '« Pour deux » 195 euros'
text  = 'Pour deux personnes, en extérieur ou en studio '
link = '#'
/>
<CardPrice
src = {Familly}
alt = 'image represente une famille'
title = '« Famille » 220 euros'
text  = 'Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)'
link = '#'
/>

<CardPrice
src = {Pregnancy}
alt = 'un ventre d une femme enceinte '
title = '« Il était une fois » 160 euros'
text  = 'Photo de grossesse (À votre domicile, en extérieur ou en studio) '
link = '#'
/>
<CardPrice
src = {Baby}
alt = 'premiere image de test'
title = '« Mon bébé » 100 euros'
text  = 'Photo d’enfant jusqu’à 3 ans (photo à domicile)'
link = '#'
/>
<CardPrice
src = {Weeding}
alt = 'premiere image de test'
title = '« J’immortalise l’événement » sur mesure'
text  = 'Prestation de mariage ou baptême sur devis '
link = '#'
/>

</PositionCard>
</>
  )
}