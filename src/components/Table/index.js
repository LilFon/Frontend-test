import React from 'react';
import { SecondaryButton } from '../Buttons';
import { 
    FormSection,
    H2,
    FormDescription,
    TableSection,
    Text,
    TextArea,
    TextInput,
    Input,
    UserForm,
        } from './styles';


export const Table = () => {
    const data = [{name: 'pedro', age: 20, content: '2222dasdada', date: '22'},
    {name: 'pedr1', age: 20, content: '2222dasdada', date: '22'},
    {name: 'pedr2', age: 20, content: '2222dasdada', date: '22'},
    {name: 'pedr3', age: 20, content: '2222dasdada', date: '22'},]
  return (
    <TableSection>
    <FormDescription>
      <H2>Previous Articles</H2>
      <Text>Review and edit previous blog posts published on to the homepage. </Text>

      </FormDescription>
    <table>
        <tr>
          <th>AUTHOR NAME</th>
          <th>TITLE</th>
          <th>CONTENT</th>
          <th>DATE</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.content}</td>
              <td>{val.date}</td>
            </tr>
          )
        })}
      </table>
    </TableSection>
  )
}