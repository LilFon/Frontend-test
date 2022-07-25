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
          <Link to="/">About Us</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Support</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Privacy Policy</Link>
        </Nav>
        <ButtonSection>
        <PrimaryButton path={'/'}>Request Invite</PrimaryButton>
        <Span>© Easybank. All Rights Reserved</Span>

        </ButtonSection>
        

    </FooterSection>
  )
}