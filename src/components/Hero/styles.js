import styled from 'styled-components';
import HeroBg from '../../assets/images/heroBg.png';

export const Img = styled.img`

    background:  url(${HeroBg}) center no-repeat;
    background-size: 700px 880px, 690px 880px;
    background-repeat: no-repeat;
    width: 700px; 
    height: 880px;
    position: absolute;
    top: 20px;
    right:0px;
    
    @media (max-width: 1250px){

    background-image: url(${HeroBg});

    position: static;
    
    width: 450px; 
    height: 600px;
    }
    
   `

export const H1 = styled.h1`
    font-size: 3rem;
    font-weight: 400;
`
export const H2 = styled.h2`
  font-size: 2.5rem;
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
  height: 180vh;

}`

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
  height: 290vh;
    
};`

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
  
  }`

export const HeroSubDescription = styled.div`

 display:grid;
 grid-template-rows: repeat(2,minmax(50px, 1fr));
 margin-bottom: 50px;
 margin-left: 150px;
 ${Text} {
  width: 550px;
  height: 80px; }
  ${H2} {
    height:30px;
  }

@media (max-width: 800px) {
  padding : 0;
  justify-content: center;
  margin-left: 0px;
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
  
};`

export const HeroGrid = styled.div`
 display:grid;
 justify-items:center;
 align-items :center;
 margin: 0 150px;
 grid-template-columns: repeat(4,  1fr);

 @media (max-width: 1200px) {

  grid-template-columns: repeat(2,  1fr);
  grid-template-rows: repeat(2,  1fr);
  
}
@media (max-width: 800px) {
  
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4,  1fr);

}`