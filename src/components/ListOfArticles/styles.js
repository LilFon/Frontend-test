import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';
import { Phones } from '../HeroBg';

export const H2 = styled.h2`
    font-size: 2.5rem;
    font-weight: 400;
    
`

export const ArticlesSection = styled.section`

background: var(--light-gray);
height: 100vh;
width: 100%;
@media (max-width: 1200px) {
  height: 150vh;
  
};

@media (max-width: 800px) {
  height: 300vh;
    
};

`

export const ArticleDescription = styled.section`
display: flex;
padding:  0 150px;
justify-content: space-between;
align-items: center;

@media (max-width: 800px) {
  padding : 0;
  justify-content: center;
  text-align: center;
  flex-direction:column;

  ${H2} {
    width: 300px;
    height: 50px; 
    text-align: center;
    
  };
  button {
    margin-bottom: 40px;
  }

  


`
export const ArticlesGrid = styled.section`

 display:grid;
 justify-items:center;
 align-items :center;
 padding:  0 120px;
 grid-template-columns: repeat(4,  1fr);
 @media (max-width: 1200px) {
  grid-template-columns: repeat(2,  1fr);
  grid-template-rows: repeat(2,  1fr);
};

@media (max-width: 800px) {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4,  1fr);
  gap: 30px;
  
}

`

export const HeroDescription = styled.div`
 display:flex;
 flex-direction:column;  
 
`


export const Text = styled.p`
    width: 440px;
    color: var(--gray);
`



export const HeroImages = styled.nav`
  
height: 100%;
width:100%;
overflow: hidden;

${Phones} {
  overflow: visible;
  display: block;
      position: relative;
      top: -150px;
      z-index: 1;
}


`

/* const ImgGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  ${ImgCell}:nth-child(2) ${ColorBox} {
    background: #ff00ff;
  }*/

export const Button = styled.button`

height: 50px;
width: 160px;
border: none;
border-radius: 25px;
color: var(--white);
font-weight: bold;
font-size: 1rem;
background: linear-gradient(to right,var(--lime-green) 0%,  var(--blue) 100%);
`