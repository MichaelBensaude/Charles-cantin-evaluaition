import React from 'react'
import styled from 'styled-components';
export default function Filter({handleFilter}) {
    const StyledContainer = styled.div `
  
    .wrapper{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
     
      justify-content: space-evenly;
      padding: 10rem;
    }
    button {
      font-family: "Fjalla One", sans-serif;
      text-align: center;
    color :white;
    border-radius : 10px;
    background-color: #4A4847;
    border: 5px solid #4A4847;
  font-size : 18px;
  margin : 10px;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.3s ease; 
  }


  
  
  
  button:hover {
    border-bottom-color: #ffffff; 
    cursor:pointer;
  }
  

  @media screen and (max-width : 1025px) {
    button {
      display: flex;
      width: 100vw;
      border-radius: 0px;
      margin: 1px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  
    `
  
    
        return (
            <StyledContainer>
              <div className='wrapper'>

    <div className='container'>

            <button onClick={() => handleFilter('baby')}>Bébé</button>
            <button onClick={() => handleFilter('pregnancy')}>Grossesse</button>
            <button onClick={() => handleFilter('family')}>Famille</button>
            <button onClick={() => handleFilter('baptism')}>Baptême</button>
            <button onClick={() => handleFilter('portrait')}>Portrait</button>
            <button onClick={() => handleFilter('weeding')}>Mariage</button>
            <button onClick={() => handleFilter('couple')}>Couple </button>
            <button onClick={() => handleFilter('tout')}>Toutes les catégories</button>
              </div>
    </div>
    
          </StyledContainer>
        );
        }

