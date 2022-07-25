import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Phones } from '../HeroBg';

export const Author = styled.p`
    color: var(--gray);
`

export const H1 = styled.h1`
    font-size: 3rem;
    font-weight: 400;
`
export const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
`
export const H3 = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
`
export const H4 = styled.h4`
  font-weight: 400;
  cursor:pointer;
  &:active {
 
    color: var(--dark-green);
  };
`

export const Text = styled.p`
    color: var(--gray);
`

export const Img = styled.img `
width: 100%;
object-fit: contain;
`

export const HeroSection = styled.section`
align-items: center;
justify-items: center;
background: var(--light-gray);
display: grid;
width: 100%;
height: 100vh;
grid-template-columns: repeat(2,minmax(150px, 1fr));
`

export const HeroSubSection = styled.section`
background: var(--cream);
width: 100%;
height: 100vh;
`

export const HeroDescription = styled.div`
 display:flex;
 flex-direction:column;   
 
 ${Text} {
  width: 440px;
  height: 80px; }
  ${H1} {
    width: 440px;
    height:100px;
  }
`
export const HeroSubDescription = styled.div`

 display:flex;
 flex-direction:column; 
 ${Text} {
  width: 550px;
  height: 80px; }
  ${H2} {
    height:30px;
  }
 
`

export const HeroGrid = styled.div`
 display:grid;
 justify-items:center;
 align-items :center;
 grid-template-columns: repeat(4,  1fr);
 ${Text} {
  margin-top: 0px;
  width: 250px;
 }
 
`
export const ArticleGridItem = styled.figure`
display: grid;
width: 260px;
height: 420px;
overflow:hidden;
margin: 0;
background: var(--white);
border-radius: 8px;
grid-template-columns: 1fr;
grid-template-rows: 200px,10px,10px,180px;

${Author} {
  font-size: 0.62rem;
  height: 14px;
  overflow:hidden;
  margin: 20px 20px 0 20px;
};
${H4} {
  font-size: 1rem;
  height: 45px;
  overflow:hidden;
  margin: 0px 20px 0px 20px;
};
${Text} {
  font-size:0.8rem;
  height: 100px;
  overflow:hidden;
  
  margin: 0px 20px 20px 20px;
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