import React from 'react';
import { useArticles } from '../../hooks/useArticles';
import { 
    H2,
    TableDescription,
    TableArticles,
    Text,
    TableSection,
    Tr,
    Th,
    Td,
    Pagination,
    Nav,
    Link,
        } from './styles';



export const Table = () => {

    const {results, loading} = useArticles();

    
  
  return (
    <TableArticles>
    <TableDescription>
      <H2>Previous Articles</H2>
      <Text>Review and edit previous blog posts published on to the homepage. </Text>

      </TableDescription>
    <TableSection>
        <Tr>
          <Th>AUTHOR NAME</Th>
          <Th>TITLE</Th>
          <Th>CONTENT</Th>
          <Th>DATE</Th>
        </Tr>
        {loading && <Tr>
              <Td>Cargando...</Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td>Edit</Td>
            </Tr>}
        {!loading && results && results.map((value, key) => {
          return (
            <Tr key={key}>
              <Td>{value.author}</Td>
              <Td>{value.title}</Td>
              <Td>{value.content}</Td>
              <Td>{value.date}</Td>
              <Td><Link to={`/EditArticle#${value.id}`}>Edit</Link></Td>
            </Tr>
          )
        })}
      </TableSection>
      <Pagination>
      <Text >← Previous</Text>
        
        <Nav>
          <Link to={'/AddArticle'}>1</Link>
          <Link to={'/AddArticle'}>2</Link>
          <Link to={'/AddArticle'}>3</Link>
          <Link to={'/AddArticle'}>...</Link>
          <Link to={'/AddArticle'}>8</Link>
          <Link to={'/AddArticle'}>9</Link>
          <Link to={'/AddArticle'}>10</Link>
        </Nav> 
        <Text>Next →</Text>
      </Pagination>
    </TableArticles>
  )
}