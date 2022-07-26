import React from 'react';
import { Logo }  from '../Logo/index';
import { PrimaryButton } from '../Buttons';
import { Nav,
         HeaderSection,
         IconMenu,
         Link
        } from './styles';



export const Header = () => {
  return (
    <HeaderSection>
      <IconMenu/>
        <Logo/>
        <Nav>
          <Link to={'/Frontend-test'}>Home</Link>
          <Link to={'/Frontend-test'}>About</Link>
          <Link to={'/Frontend-test'}>Contact</Link>
          <Link to={'/Frontend-test'}>Blog</Link>
          <Link to={'/Frontend-test'}>Careers</Link>
        </Nav>
        <PrimaryButton path={'/Frontend-test'}>Request Invite</PrimaryButton>
        
    </HeaderSection>
  )
}