import React, { useState } from 'react'
import Filter from '../navbar/Filter';
import styled from 'styled-components';
import Baby1 from '../img/Bébé/baby1.jpg';
import Baby2 from '../img/Bébé/baby2.jpg';
import Baby3 from '../img/Bébé/baby3.jpg';
import Baby4 from '../img/Bébé/baby4.jpg';
import Baby5 from '../img/Bébé/baby5.jpg';
//
import Couple1 from '../img/Couple/couple1.jpg';
import Couple2 from '../img/Couple/couple2.jpg';
import Couple3 from '../img/Couple/couple3.jpg';
import Couple4 from '../img/Couple/couple4.jpg';
import Couple5 from '../img/Couple/couple5.jpg';
//
import Pregnancy1 from '../img/Grossesse/pregnancy1.jpg';
import Pregnancy2 from '../img/Grossesse/pregnancy2.jpg';
import Pregnancy3 from '../img/Grossesse/pregnancy3.jpg';
import Pregnancy4 from '../img/Grossesse/pregnancy4.jpg';
import Pregnancy5 from '../img/Grossesse/pregnancy5.jpg';
//
import Weeding1 from '../img/Mariage/weeding1.jpg';
import Weeding2 from '../img/Mariage/weeding2.jpg';
import Weeding3 from '../img/Mariage/weeding3.jpg';
import Weeding4 from '../img/Mariage/weeding4.jpg';
import Weeding5 from '../img/Mariage/weeding5.jpg';
//
import Baptism1 from '../img/Bapteme/baptism1.jpg';
import Baptism2 from '../img/Bapteme/baptism2.jpg';
import Baptism3 from '../img/Bapteme/baptism3.jpg';
import Baptism4 from '../img/Bapteme/baptism4.jpg';
import Baptism5 from '../img/Bapteme/baptism5.jpg';
//
import Portrait1 from '../img/Portrait/portrait1.jpg';
import Portrait2 from '../img/Portrait/portrait2.jpg';
import Portrait3 from '../img/Portrait/portrait3.jpg';
import Portrait4 from '../img/Portrait/portrait4.jpg';
import Portrait5 from '../img/Portrait/portrait5.jpg';
//
import Family1 from '../img/Famille/Family1.jpg';
import Family2 from '../img/Famille/Family2.jpg';
import Family3 from '../img/Famille/Family3.jpg';
import Family4 from '../img/Famille/Family4.jpg';
import Family5 from '../img/Famille/Family5.jpg';


export default function Galery() {
  const [Data, setData] = useState([
    { src: Baby1, alt: 'image de bébé', category: 'baby' },
    { src: Baby2, alt: 'image de bébé', category: 'baby' },
    { src: Baby3, alt: 'image de bébé', category: 'baby' },
    { src: Baby4, alt: 'image de bébé', category: 'baby' },
    { src: Baby5, alt: 'image de bébé', category: 'baby' },

    { src: Couple1, alt: 'image de couple', category: 'couple' },
    { src: Couple2, alt: 'image de couple', category: 'couple' },
    { src: Couple3, alt: 'image de couple', category: 'couple' },
    { src: Couple4, alt: 'image de couple', category: 'couple' },
    { src: Couple5, alt: 'image de couple', category: 'couple' },

    { src: Pregnancy1, alt: 'image de Grossesse', category: 'pregnancy' },
    { src: Pregnancy2, alt: 'image de Grossesse', category: 'pregnancy' },
    { src: Pregnancy3, alt: 'image de Grossesse', category: 'pregnancy' },
    { src: Pregnancy4, alt: 'image de Grossesse', category: 'pregnancy' },
    { src: Pregnancy5, alt: 'image de Grossesse', category: 'pregnancy' },

    { src: Weeding1, alt: 'image de mariage', category: 'weeding' },
    { src: Weeding2, alt: 'image de mariage', category: 'weeding' },
    { src: Weeding3, alt: 'image de mariage', category: 'weeding' },
    { src: Weeding4, alt: 'image de mariage', category: 'weeding' },
    { src: Weeding5, alt: 'image de mariage', category: 'weeding' },

    { src: Baptism1, alt: 'image de bapteme', category: 'baptism' },
    { src: Baptism2, alt: 'image de bapteme', category: 'baptism' },
    { src: Baptism3, alt: 'image de bapteme', category: 'baptism' },
    { src: Baptism4, alt: 'image de bapteme', category: 'baptism' },
    { src: Baptism5, alt: 'image de bapteme', category: 'baptism' },

    { src: Portrait1, alt: 'image de portrait', category: 'portrait' },
    { src: Portrait2, alt: 'image de portrait', category: 'portrait' },
    { src: Portrait3, alt: 'image de portrait', category: 'portrait' },
    { src: Portrait4, alt: 'image de portrait', category: 'portrait' },
    { src: Portrait5, alt: 'image de portrait', category: 'portrait' },
    { src: Family1, alt: 'image de Famille', category: 'family' },
    { src: Family2, alt: 'image de Famille', category: 'family' },
    { src: Family3, alt: 'image de Famille', category: 'family' },
    { src: Family4, alt: 'image de Famille', category: 'family' },
    { src: Family5, alt: 'image de Famille', category: 'family' },
  ])

  const StyleGalery = styled.div`
    .card {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
  `

  const [selectedCategory, setSelectedCategory] = useState("tout");

  const filteredImages =
    selectedCategory === "tout"
      ? Data
      : Data.filter((image) => image.category === selectedCategory);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <StyleGalery>
      <Filter handleFilter={handleFilter} />

      <div className="container">
        <div className="card">
          {filteredImages.map((image, index) => (
            <img key={index} src={image.src} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </StyleGalery>
  );
}
