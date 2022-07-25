import React from 'react';
import { SecondaryButton } from '../Buttons';
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


export const Form = () => {
  return (
    <>
    <FormSection>
      <FormDescription>
      <H2>Add New Blog Article</H2>
      <Text>Publish a new blog article to feature in the Easybank homepage.</Text>

      </FormDescription>
      <UserForm>
        <TextInput>Author</TextInput>
        <Input></Input>
        <TextInput>Blog Title</TextInput>
        <Input></Input>
        <TextInput>Blog Content</TextInput>
        <TextArea></TextArea>
        <SecondaryButton>Save</SecondaryButton>

      </UserForm>
      
    </FormSection>
    </>
  )
}