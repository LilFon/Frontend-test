import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';

export const NonstyleButton = styled.button`

height: 20px;
width: 20px;
background-color: transparent;
border: none;
cursor:pointer;

&:active {  
    svg{
        filter: invert(77%) sepia(8%) saturate(3000%) hue-rotate(106deg) brightness(190%) contrast(84%);
    }  
    
}

&:hover {    
    animation: fadeIn 0.1s;
}
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`

export const NavButton = styled.nav`
  display:grid;
  grid-template-columns: repeat(2,minmax(70px, 1fr));
  grid-template-rows: repeat(3,minmax(30px, 1fr)); 
  width: 100%;
  color: var(--light-gray);
  font-weight: 400;
  font-size: 1rem;
  justify-content: space-evenly;
  list-style:none ;
`



export const Button = styled.button`

height: 50px;
width: 160px;
border: none;
border-radius: 25px;
background: linear-gradient(to right,var(--lime-green) 0%,  var(--blue) 100%);
color: var(--white);
font-weight: bold;
font-size: 1rem;
cursor:pointer;

&:active {    
    background: linear-gradient(to right,var(--active-green) 4.85%,  var(--active-blue) 100%);
}

&:hover {    
    animation: fadeIn 0.1s;
}
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`

export const FormButton = styled.button`

height: 50px;
width: 160px;
border: none;
border-radius: 25px;
background: linear-gradient(to right,var(--lime-green) 0%,  var(--blue) 100%);
color: var(--white);
font-weight: bold;
font-size: 1rem;
width: 90%;
cursor:pointer;

&:active {    
    background: linear-gradient(to right,var(--active-green) 4.85%,  var(--active-blue) 100%);
}

&:hover {    
    animation: fadeIn 0.1s;
}
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`