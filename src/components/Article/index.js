import React from 'react';
import {
  Author, 
  H4,
  Img,
  ArticleGridItem,
  Text } from './styles';

export const Article = (props) => {
  return (
    <>
    
        <ArticleGridItem key={props.id}>
         <Img src={props.image}></Img>
         <Author>{props.author}</Author>
          <H4>{props.title}</H4>
          <Text>{props.content}</Text>
        </ArticleGridItem>
       
   
    </>
  )
}