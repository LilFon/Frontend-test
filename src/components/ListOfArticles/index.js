import React from 'react';
import { Logo }  from '../Logo/index';
import { LogoContainer, HeroImages,ArticlesSection, Button,H2, ArticlesGrid,ArticleDescription, Text } from './styles';
import { Article } from '../Article';
import { PrimaryButton } from '../Buttons';

export const ListOfArticles = () => {
  return (
    <>
    <ArticlesSection>
      <ArticleDescription>
      <H2>Latest Articles </H2>
      <PrimaryButton path={'AddArticle'}>+ Add new Article</PrimaryButton>

      </ArticleDescription>
   
      <ArticlesGrid>
       <Article/>
       <Article/>
       <Article/>
       <Article/>
      </ArticlesGrid>
      
    </ArticlesSection>
    </>
  )
}