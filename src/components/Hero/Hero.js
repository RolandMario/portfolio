import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Roland Ayuk, <br />
         Portfolio
        </SectionTitle>
        <SectionText>
        I build applications that keep users engaged and make them  satisfied in their digital experiences,
         focusing on Security, Performance, and Mobile Responsiveness.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;