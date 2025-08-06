import React from 'react';
import '../css/About.css'
import AboutBanner from '../sections/AboutBanner';
import FounderBio from '../sections/FounderBio';
import TeachingPhilosophy from '../sections/TeachingPhilosophy';
import QuoteSection from '../sections/QuoteSection';
import AboutHistory from '../sections/AboutHistory';


const About = () => {
  return (
    <>
      <AboutBanner/>
      <FounderBio/>
      <QuoteSection/>
      <TeachingPhilosophy/>
      <AboutHistory/>
    </>
  );
};

export default About;