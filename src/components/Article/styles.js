import styled from 'styled-components';

export const Author = styled.p`
    color: var(--gray);
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