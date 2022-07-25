import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom';

export const TableArticles = styled.section`
padding-top: 100px;
background: var(--cream);
display:flex;
flex-direction: column;
align-items: center;
justify-items: center;
width: 100%;
height: 90vh;

@media (max-width: 1200px) {
  height: 150vh;
  align-items: center;
justify-items: center;
  
};

@media (max-width: 800px) {
  height: 280vh;
    
};




`

export const TableSection = styled.table`
width:  800px;
height: 46vh;
border-collapse:collapse;
background: var(--white);
border-radius: 8px;

filter: drop-shadow(0px 0px 3px rgba(0,0,0,.3));
tr:nth-child(2n) {
  background: var(--cream);
}


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


///////
export const H1 = styled.h1`
    font-size: 3rem;
    font-weight: 400;
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
export const FormDescription = styled.div`

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