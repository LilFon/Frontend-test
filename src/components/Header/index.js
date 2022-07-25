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
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/'}>Contact</Link>
          <Link to={'/'}>Blog</Link>
          <Link to={'/'}>Careers</Link>
        </Nav>
        <PrimaryButton path={'/'}>Request Invite</PrimaryButton>
        
    </HeaderSection>
  )
}