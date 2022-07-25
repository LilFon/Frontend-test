import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';
import { Phones } from '../HeroBg';

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

export const Text = styled.p`
    color: var(--gray);
`

export const HeroSection = styled.section`
align-items: center;
justify-items: center;
background: var(--light-gray);
display: grid;
width: 100%;
height: 100vh;
grid-template-columns: repeat(2,minmax(150px, 1fr));

@media (max-width: 900px) {
  
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2,  1fr);
  height: 100vh;

}


`

export const HeroSubSection = styled.section`
background: var(--cream);
display:flex;
flex-direction: column;
width: 100%;
height: 100vh;

@media (max-width: 1200px) {
  height: 150vh;
  align-items: center;
justify-items: center;
  
};

@media (max-width: 800px) {
  height: 280vh;
    
};




`

export const HeroDescription = styled.div`
  
 display:flex;
 flex-direction:column;   
 
 ${Text} {
  width: 440px;
  height: 70px; 
  };
  ${H1} {
    width: 440px;
    height:80px;
  };

  @media (max-width: 900px) {
  
    grid-area: 2/1/2/1;
  
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

  
  @media (max-width: 1200px) {
   
  
  };

@media (max-width: 800px) {
  padding : 0;
  justify-content: center;

  ${Text} {
    width: 300px;
    height: 100px; 
    text-align: center;
  };

  ${H2} {
    width: 300px;
    height: 100px; 
    text-align: center;
  };
  
};
 
`

export const HeroGrid = styled.div`
 display:grid;
 justify-items:center;
 align-items :center;
 
 grid-template-columns: repeat(4,  1fr);

 @media (max-width: 1200px) {
  grid-template-columns: repeat(2,  1fr);
  grid-template-rows: repeat(2,  1fr);
  
}
@media (max-width: 800px) {
  
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4,  1fr);

}

 `
export const HeroGridItem = styled.figure`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
margin-bottom: 100px;
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