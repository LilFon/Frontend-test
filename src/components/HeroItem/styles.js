import styled from 'styled-components';

export const H4 = styled.h4`
  font-weight: 400;
`

export const Text = styled.p`
    color: var(--gray);
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
