import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';

export const FooterSection = styled.section`
  align-items: center;
  justify-items: center;
  background: var(--dark-blue);
  display: grid;
  width: 100%;
  height: 200px;
  grid-template-columns: repeat(3,minmax(150px, 1fr));
  filter: drop-shadow(0px 0px 3px rgba(0,0,0,.3));

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export const IconsFooterSection = styled.div`
 display:grid;
 grid-template-rows: repeat(2,1fr);
 row-gap: 60px;

 @media (max-width: 900px) {
  display:flex;
  justify-content: space-around;
  margin: 50px 0;
}

 
`

export const Nav = styled.nav`
  
 
  display:grid;
  grid-template-columns: repeat(2,minmax(70px, 1fr));
  grid-template-rows: repeat(3,minmax(30px, 1fr)); 
  width: 100%;
  color: var(--light-gray);
  font-weight: 400;
  font-size: 1rem;
  justify-content: space-evenly;
  list-style:none ; 
  @media (max-width: 900px) {
    text-align: center;
  }
  
`

export const Link = styled(LinkRouter)`
color: var(--light-gray);
text-decoration: none;
&:active {
 
  color: var(--dark-green);
};
`

export const ButtonSection = styled.div`
 display:grid;
 grid-template-rows: repeat(2, 1fr);
 padding: 40px 0 0 0;
 row-gap: 30px;
 justify-items:center;
}
`

export const SocialIcons = styled.div`
  
 display:flex;
 justify-content: space-between;
 width: 160px; 
`

export const Span = styled.span`
color: var(--light-gray);
`