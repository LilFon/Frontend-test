import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';
import { Menu } from '../Icons';

export const IconMenu = styled(Menu)`
cursor:pointer;
&:active {    
  filter: invert(77%) sepia(8%) saturate(3000%) hue-rotate(106deg) brightness(50%) contrast(84%);
}

&:hover {    
  animation: fadeIn 0.1s;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`

export const Link = styled(LinkRouter)`
color: var(--gray);
text-decoration: none;
&:active {
 color: var(--black);

 &:after {
  height: 4px;
  width: 54px;
  display: block;
  position: absolute;
  bottom : 2px; 
  content: '';
  background: linear-gradient(to right,var(--lime-green) 0%,  var(--blue) 100%);
  
}

};
`

export const Nav = styled.nav`
  
 
  display: flex;
  width: 100%;
  color: var(--gray);
  font-weight: 400;
  font-size: 1.05rem;
  justify-content: space-evenly;
  list-style:none ;
  
  
`


export const HeaderSection = styled.section`
  align-items: center;
  justify-items: center;
  background: var(--white);
  display: grid;
  width: 100%;
  height: 80px;
  grid-template-columns: repeat(3,minmax(150px, 1fr));
  
  /**/
  filter: drop-shadow(0px 0px 3px rgba(0,0,0,.3));
  left: 0;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
  ${IconMenu} {
    display: none;
  };

  @media (max-width: 800px) {
    ${Nav} {
      display: none;
    };
    ${IconMenu} {
      padding-top:20px;
      justify-self: center;
      align-self: center;
      display: block;
      
    }
  }

  
`

export const LogoContainer = styled.div`
  
 display:flex;

  
`





export const Button = styled.button`

height: 50px;
width: 160px;
border: none;
border-radius: 25px;
color: var(--white);
font-weight: bold;
font-size: 1rem;
margin-left:50px;
background: linear-gradient(to right,var(--lime-green) 0%,  var(--blue) 100%);
`