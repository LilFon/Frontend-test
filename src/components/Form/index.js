import { useState } from 'react';
import { SecondaryButton } from '../Buttons';
import { useValue } from '../../hooks/useValue';

import { 
    FormSection,
    H2,
    FormDescription,
    Text,
    TextArea,
    TextInput,
    Input,
    UserForm,
        } from './styles';

export const Form = ({onSubmit,text,description,id}) => {

  const author = useValue('');
  const title = useValue('');
  const content = useValue('');
  const [message,setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit( {
      author: author.value,
      content: content.value,
      title: title.value
  
      },(id!=null && id) ).then(()=> {
        setMessage('Operacion realizada correctamente');
      }).catch( () => {
        setMessage('Hubo un error');
      });

      author.setValue('');
      content.setValue('');
      title.setValue('');
      
      setTimeout(()=>{ 
      setMessage(''); 
      window.location.href = '/Frontend-test/';
      },3000);
   }

  return (
    <>
    <FormSection onSubmit={handleSubmit}>
      <FormDescription>
        <div>
        <H2>{text}</H2>
      <Text>{description}</Text>
        </div>
      </FormDescription>
      <UserForm>
        <TextInput>Author</TextInput>
        <Input {...author}></Input>
        <TextInput>Blog Title</TextInput>
        <Input {...title}></Input>
        <TextInput>Blog Content</TextInput>
        <TextArea {...content}></TextArea>
        <SecondaryButton>Save</SecondaryButton>

      </UserForm>

      {message && <Text>{message}</Text>}
      
    </FormSection>
    </>
  )
}