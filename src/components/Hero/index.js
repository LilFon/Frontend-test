import React from 'react';
import {Phones,Shape} from '../HeroBg';
import { HeroItem } from '../HeroItem';
import {Cards,Budgeting,OnBoarding,Processor} from '../Icons';
import { PrimaryButton } from '../Buttons';
import { 
  HeroImages,
  HeroSection,
  Button,
  H1,
  H2,
  H3,
  HeroDescription,
  HeroSubSection,
  HeroGrid,
  HeroSubDescription,
  HeroGridItem,
  HeroGridItemCircle,
  Text } from './styles';


export const Hero = () => {
  return (
    <>
    <HeroSection>
        <HeroDescription>
        <H1>Next generation digital banking</H1>
        <Text>Take your financial life online. Your Easybank account will be a one-stop-shop for spending.
            saving,
            budgeting,
            investing, and much more.</Text>
            <PrimaryButton path={'/'}>Request Invite</PrimaryButton>
        </HeroDescription>
        <HeroImages>
            <Shape/>
            <Phones style={{position: 'relative',left: '100px',top: '-700px',zIndex: '1'}}/>
        </HeroImages>
    
        
        

    </HeroSection>
    <HeroSubSection>
      <HeroSubDescription>
      <H2>Why choose Easybank?</H2>
      <Text>We leverage Open Banking to turn your bank acount into your financial hub. Control your finances like never before.</Text>

      </HeroSubDescription>
      <HeroGrid>
        <HeroItem
        title={"Online Banking"}
        svg={ <Cards/>}
        description={"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."}
        />
        <HeroItem
        title={"Simple Budgeting"}
        svg={<Budgeting/>}
        description={"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."}
        />
        <HeroItem
        title={"Fast Onboarding"}
        svg={<OnBoarding/>}
        description={"We don’t do branches. Open your account in minutes online and start taking control of your finances right away."}
        />
        <HeroItem
        title={"Open API"}
        svg={<Processor/>}
        description={"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}
        />
        
      </HeroGrid>
    </HeroSubSection>
    </>
  )
}