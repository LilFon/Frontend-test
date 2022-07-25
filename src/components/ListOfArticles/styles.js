import styled from 'styled-components';

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
    
};`

export const ArticleDescription = styled.section`
display:grid;

grid-template-columns: repeat(2,minmax(150px, 1fr));

align-items: center;

 ${H2} {
  
  width: 300px;
  height: 50px; 
  margin-left:150px;
  display:flex;
  justify-self: start;
  
  
};

div {
  display:flex;
  justify-self: end;
  margin-right:150px

};

@media (max-width: 800px) {
  padding : 0;
  display:flex;
  justify-content: center;
  text-align: center;
  flex-direction:column;

  ${H2} {
    width: 300px;
    height: 50px; 
  
    display:block;
    margin: 0;
    margin-top: 30px;
    margin-bottom: 30px;
    
  };
  div {
    display:block;
    margin: 0;
    margin-bottom: 30px;
   
    
  }`

export const ArticlesGrid = styled.section`

 display:grid;
 justify-items:center;
 align-items :center;
 padding:  0 90px;
 grid-template-columns: repeat(4,  1fr);
 @media (max-width: 1200px) {
  grid-template-columns: repeat(2,  1fr);
  grid-template-rows: repeat(2,  1fr);
};

@media (max-width: 800px) {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4,  1fr);
  gap: 30px;
  
}`
