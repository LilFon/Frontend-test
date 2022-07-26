import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';

export const TableArticles = styled.section`
padding-top: 40px;
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
  height: 120vh;
    
};`

export const Nav = styled.nav`
  display: flex;
  width: 300px;
  padding-top:14px;
  color: var(--gray);
  font-weight: 400;
  font-size: 1.05rem;
  justify-content: space-evenly;
  list-style:none ;

  @media (max-width: 900px) {
    width:  200px;
  
  }
  
  
`

export const Link = styled(LinkRouter)`
color: var(--dark-green);
text-decoration: none;


};
`

export const Pagination = styled.div`
align-self:center;
margin-top: 30px;
border-top: 1px solid var(--light-cream);
width:  800px;
display: flex;
justify-content: space-between;

p {
  cursor:pointer;
}

${Link} {
  color: var(--gray);
  &:active {
  color: var(--green);
 
  &:after {
   height: 4px;
   width: 10px;
   display: block;
   position: relative;
   top: -36px; 
   content: '';
   z-index:1000;
   background: linear-gradient(to right,var(--lime-green) 0%,  var(--blue) 100%);
   
 } }


@media (max-width: 900px) {
  width:  400px;
  
}
`

export const TableSection = styled.table`
align-self:center;
width:  800px;
height: 46vh;
border-collapse:collapse;
background: var(--white);
border-radius: 8px;

filter: drop-shadow(0px 0px 3px rgba(0,0,0,.3));
tr:nth-child(2n) {
  background: var(--cream);
};

@media (max-width: 900px) {
  width:  400px;
  overflow: hidden;

}

`
export const Tr = styled.tr`
color: var(--gray);

td{
  text-align: center;
}

td:nth-child(1){
  color: var(--dark-blue);
  font-weight: 500;
  
}
td:nth-child(2){
  width:40px;
}

td:nth-child(5){
  color: var(--dark-green);
  cursor:pointer;
  width:80px;
}

`

export const Th = styled.th`
color: var(--gray);
`

export const Td = styled.td`
color: var(--gray);
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
export const TextArea = styled.textarea`
width: 90%;
height: 280px;
border: 1px solid var(--gray);
border-radius: 6px;
margin-bottom: 20px;
`

export const TextInput = styled.p`
    color: var(--dark-blue);
`
export const Input = styled.input`

    width: 90%;
    height: 30px;
    border: 1px solid var(--gray);
    border-radius: 6px;
    

`

export const H1 = styled.h1`
    font-size: 3rem;
    font-weight: 400;
`

export const TableDescription = styled.div`

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
 margin: 0px;
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

export const UserForm = styled.form`
    paddin: 20px 0;
    background: var(--white);
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    
    filter: drop-shadow(0px 0px 3px rgba(0,0,0,.3));
    width:  600px;
    height: 90vh;
    border-radius: 25px;

  ${TextInput} {
    padding-left: 60px;
    width: 100%;
    text-align:left;
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