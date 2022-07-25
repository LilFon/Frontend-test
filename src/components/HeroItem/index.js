import React from 'react';
import {
  H4,
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