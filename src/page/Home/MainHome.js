import React from 'react';
import AdsBanner from './AdsBanner';
import Carousol from './Sections/Carousol';
import Impressions from './Sections/Impressions';
import IntroCard from './Sections/IntroCard';
import TrandingSection from './Sections/TrandingSection';

const MainHome = () => {
    return (
        <div >
           <Carousol></Carousol>
           <IntroCard></IntroCard>
           <AdsBanner></AdsBanner>
           <Impressions></Impressions>
           <TrandingSection></TrandingSection>
        </div>
    );
};

export default MainHome;