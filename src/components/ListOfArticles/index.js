import React from 'react';
import { ArticlesSection,
         H2,
         ArticlesGrid,
         ArticleDescription} from './styles';
import { Article } from '../Article';
import { PrimaryButton } from '../Buttons';
import {useLastestArticles} from '../../hooks/useLastestArticles';

export const ListOfArticles = (props) => {
  const  { results, loading } = useLastestArticles();
  
  return (
    <>
    <ArticlesSection>
      <ArticleDescription>
      <H2>Latest Articles </H2>
      <div>
      { props.button && <PrimaryButton path={'AddArticle'}>+ Add new Article</PrimaryButton>}
      </div>
      

      </ArticleDescription>
   
      <ArticlesGrid>
      {loading && <div>Loading...</div> }
      {loading==false && results!=undefined &&

       results.map( element => (
        <>
         <Article
         key={element.id}
         id={element.id}
         title={element.title}
         image={element.image_url}
         content={element.content}
         author={element.author}
         />
        
        </>
       ))
      }
      
      
      
      
      </ArticlesGrid>
      
    </ArticlesSection>
    </>
  )
}