import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hi! My name is Ali Imran Adil and I am a Full Stack Developer. I'm passionate about learning new things and a goal-oriented aspiring Developer.
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/ali-imran-adil-65a21842/')}>Know More</Button>
    </LeftSection>
  </Section>
);

export default Hero;