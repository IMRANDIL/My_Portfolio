import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Javascript', text: 'Udemy'},
  { number: 'Node Js', text: 'Udemy', },
  { number: 'React Js', text: 'Udemy', },
  { number: 'Next Js', text: 'Udemy', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certifications :)</SectionTitle>
    <Boxes>
      {data.map((card,index)=>{
        return <Box key={index}>
<BoxNum>{card.number}</BoxNum>
<BoxText>{card.text}</BoxText>

          </Box>
      })}
    </Boxes>
  </Section>
);

export default Acomplishments;
