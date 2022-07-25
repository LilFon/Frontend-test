import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';
import { Phones } from '../HeroBg';

export const Author = styled.p`
    color: var(--gray);
`

export const H1 = styled.h1`
    
    font-weight: 400;
`
export const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
`
export const H3 = styled.h3`
 font-weight: 400;
`
export const H4 = styled.h4`
  font-weight: 400;
`

export const Text = styled.p`
    color: var(--gray);
`

export const Img = styled.img `
width: 100%;
object-fit: contain;
`

export const HeroGridItem = styled.figure`
display: grid;
width: 260px;
height: 420px;
margin:0;
grid-template-rows: 100px,50px,180px;

${H4} {
  font-size: 1.6rem;
  margin: 0;
  
 
};
${Text} {
  width: 250px;
  height: 180px;
  
  
  
}
`
export const HeroGridItemCircle = styled.div`
width: 70px;
height: 70px;
-moz-border-radius: 50%;
-webkit-border-radius: 50%;
border-radius: 50%;
background: linear-gradient(to right,var(--lime-green) 0%,  var(--blue) 100%);

svg {
  margin: 12px auto 0 auto;
}
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
