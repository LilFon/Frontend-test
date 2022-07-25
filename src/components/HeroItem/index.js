import React from 'react';
import {
  Author, 
  HeroImages,
  HeroSection,
  Button,
  H1,
  H2,
  H3,
  H4,
  Img,
  HeroDescription,
  HeroSubSection,
  HeroGrid,
  HeroSubDescription,
  HeroGridItem,
  HeroGridItemCircle,
  Text } from './styles';


export const HeroItem = (props) => {
  return (
    <>
    
        <HeroGridItem>
          <HeroGridItemCircle>
            {props.svg}
          </HeroGridItemCircle>
          <H4>{props.title}</H4>
          <Text>{props.description}</Text>
        </HeroGridItem>
       
   
    </>
  )
}