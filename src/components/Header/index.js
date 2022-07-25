import React from 'react';
import { Logo }  from '../Logo/index';
import { LogoContainer, Nav,HeaderSection,IconMenu, Link} from './styles';
import { PrimaryButton } from '../Buttons';


export const Header = () => {
  return (
    <HeaderSection>
      <IconMenu/>
        <LogoContainer>
        <Logo/>
        </LogoContainer>
        
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