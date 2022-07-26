import React from 'react';
import { Logo2 }  from '../Logo/index';
import { IconsFooterSection, 
         Nav,
         Link,
         FooterSection,
         SocialIcons,
         ButtonSection,
         Span 
        } from './styles';
import { PrimaryButton,
         FacebookButton, 
         TwitterButton,
         PinterestButton,
         InstagramButton,
         YoutubeButton 
        } from '../Buttons';

export const Footer = () => {
  return (
    <FooterSection>
        <IconsFooterSection>
        <Logo2/>
        <SocialIcons>
            <FacebookButton/>
            <YoutubeButton/>
            <TwitterButton/>
            <PinterestButton/>
            <InstagramButton/>
        </SocialIcons>
        </IconsFooterSection>
        
        <Nav>
          <Link to="/Frontend-test">About Us</Link>
          <Link to="/Frontend-test">Careers</Link>
          <Link to="/Frontend-test">Contact</Link>
          <Link to="/Frontend-test">Support</Link>
          <Link to="/Frontend-test">Blog</Link>
          <Link to="/Frontend-test">Privacy Policy</Link>
        </Nav>
        <ButtonSection>
        <PrimaryButton path={'/Frontend-test'}>Request Invite</PrimaryButton>
        <Span>© Easybank. All Rights Reserved</Span>

        </ButtonSection>
        

    </FooterSection>
  )
}