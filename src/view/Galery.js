import React, {useState} from 'react'
import Filter from '../navbar/Filter';
import styled from 'styled-components';
export default function Galery() {
  
const [images , setImages] = useState ([
  { src: 'https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', category: 'baby' },
  { src: 'https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', category: 'baby' },
  { src: 'https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', category: 'baby' },
  { src: 'https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', category: 'baby' },
  { src: 'https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', category: 'baby' },
  //
  { src: 'https://images.unsplash.com/photo-1637098423670-0198ae7db664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'baptism' },
  { src: 'https://images.unsplash.com/photo-1637098423670-0198ae7db664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'baptism' },
  { src: 'https://images.unsplash.com/photo-1637098423670-0198ae7db664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'baptism' },
  { src: 'https://images.unsplash.com/photo-1637098423670-0198ae7db664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'baptism' },
  { src: 'https://images.unsplash.com/photo-1637098423670-0198ae7db664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'baptism' },
  //
  { src: 'https://images.unsplash.com/photo-1576694662383-508e793456c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'weeding' },
  { src: 'https://images.unsplash.com/photo-1576694662383-508e793456c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'weeding' },
  { src: 'https://images.unsplash.com/photo-1576694662383-508e793456c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'weeding' },
  { src: 'https://images.unsplash.com/photo-1576694662383-508e793456c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'weeding' },
  { src: 'https://images.unsplash.com/photo-1576694662383-508e793456c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'weeding' },
  //
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'portrait' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'portrait' },
  //
  { src: 'https://images.unsplash.com/photo-1643868420405-48e32c6f4620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'family' },
  { src: 'https://images.unsplash.com/photo-1643868420405-48e32c6f4620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'family' },
  { src: 'https://images.unsplash.com/photo-1643868420405-48e32c6f4620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'family' },
  { src: 'https://images.unsplash.com/photo-1643868420405-48e32c6f4620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'family' },
  { src: 'https://images.unsplash.com/photo-1643868420405-48e32c6f4620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'family' },
  //
  { src: 'https://images.unsplash.com/photo-1538678867871-8a43e7487746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', category: 'pregnancy' },
  { src: 'https://images.unsplash.com/photo-1538678867871-8a43e7487746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', category: 'pregnancy' },
  { src: 'https://images.unsplash.com/photo-1538678867871-8a43e7487746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', category: 'pregnancy' },
  { src: 'https://images.unsplash.com/photo-1538678867871-8a43e7487746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', category: 'pregnancy' },
  { src: 'https://images.unsplash.com/photo-1538678867871-8a43e7487746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80', category: 'pregnancy' },
  //
  { src: 'https://images.unsplash.com/photo-1591969851586-adbbd4accf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'couple' },
  { src: 'https://images.unsplash.com/photo-1591969851586-adbbd4accf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'couple' },
  { src: 'https://images.unsplash.com/photo-1591969851586-adbbd4accf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'couple' },
  { src: 'https://images.unsplash.com/photo-1591969851586-adbbd4accf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'couple' },
  { src: 'https://images.unsplash.com/photo-1591969851586-adbbd4accf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', category: 'couple' },


])
const stytleGalery = styled.div`
.card {
display:flex;
justify-content:space-around;
flex-direction:column;
}

`
const [selectedCategory, setSelectedCategory] = useState("tout");
const filteredImages =
  selectedCategory === "tout"
    ? images
    : images.filter((image) => image.category === selectedCategory);
const handleFilter = (category) => {
  setSelectedCategory(category);
};
return (
  <stytleGalery>
      <Filter handleFilter={handleFilter} />

<div className="container">
          <div className ="card">
            

      {filteredImages.map((image, index) => (
        <img   key={index} src={image.src} alt={`Image ${index + 1}`} />
        ))}
            
            </div>
            </div>


        </stytleGalery>
);
}