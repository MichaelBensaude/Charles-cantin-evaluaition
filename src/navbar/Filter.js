import React from 'react'
import styled from 'styled-components';
export default function Filter({handleFilter}) {
    const StyledContainer = styled.div `
  
    .wrapper{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      
      
      padding: 7rem;
    }
    button {

      font-family: Pacifico;
    color :white;
    border-radius : 20px;
    background-color: rgba(51, 153, 194, 0.74);
    border: 1px solid #0082b0;
  font-size : 16px;
  margin : 10px;
  }
  button:hover {
  background-color :  red; 
  }
  @media screen and (max-width : 1025px) {
button{
  display : flex;
  width: 100vw;
  border-radius: 0px;
  margin : 1px;
flex-direction : column;

    
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

