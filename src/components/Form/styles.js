import styled from 'styled-components';

export const H2 = styled.h2`
  font-size: 2.5rem;
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
    border-radius: 6px;`

export const FormSection = styled.section`
padding-top: 100px;
background: var(--cream);
display:flex;
flex-direction: column;
width: 100%;
height: 130vh;

& > ${Text} {
  font-size: 1.2rem;
  text-align: center;
  justify-self: center;
}

@media (max-width: 1200px) {
  height: 150vh;
  align-items: center;
justify-items: center;
  
};

@media (max-width: 800px) {
  height: 140vh;
    
};`

export const FormDescription = styled.div`

display: flex;
margin-left:150px;

 ${Text} {
  width: 550px;
  height: 80px; }
  ${H2} {
    height:30px;
  }

  
  @media (max-width: 1200px) {
    margin: 0px;
  
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
  
};`

export const UserForm = styled.form`
    align-self: center;
    justify-content: center;
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

  @media (max-width: 800px) {
    width:  400px;
      
  };`




