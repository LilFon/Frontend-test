import React from 'react';
import { Link } from 'react-router-dom';
import {
  Li,
  Nav,
  NonstyleButton,
  Button,
  FormButton
  } from './styles';
import { Facebook,Youtube,Twitter,Pinterest,Instagram } from '../LogoSocial';

//window.scrollTo(0, 0)

export const PrimaryButton = ({ path,children }) => {
    return (
     <Link to={path} >
      <Button>
        {children}
      </Button>
      </Link>
    );
};

export const SecondaryButton = ({ path,children }) => {
  return (
   
    <FormButton to={path}>
      {children}
    </FormButton>
  );
};

export const FacebookButton = () => {
    return (
      <NonstyleButton>
        <Facebook/>
      </NonstyleButton>
    );
};

export const YoutubeButton = () => {
    return (
      <NonstyleButton>
        <Youtube/>
      </NonstyleButton>
    );
};

export const TwitterButton = () => {
    return (
      <NonstyleButton>
        <Twitter/>
      </NonstyleButton>
    );
};

export const PinterestButton = () => {
    return (
      <NonstyleButton>
        <Pinterest/>
      </NonstyleButton>
    );
};

export const InstagramButton = () => {
    return (
      <NonstyleButton>
        <Instagram/>
      </NonstyleButton>
    );
};