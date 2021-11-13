import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
<SectionDivider/>
<br/>
<SectionTitle>Technologies</SectionTitle>
<SectionText>
  I am working on Wordpress, Vanilla JavaScript, React Js, Next Js, Node Js, PHP, Express, React Native, Kotlin, HTML, CSS, Bootstrap, TailWindCss, SQL, MongoDB, REST APIs, GraphQL APIs, Google Cloud
</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem"/>
    <ListContainer>
      <ListTitle>Front-end</ListTitle>
      <ListParagraph>
        Experience with <br/>
        React.js and Next.js
      </ListParagraph>
    </ListContainer>
  </ListItem>

  <ListItem>
    <DiFirebase size="3rem"/>
    <ListContainer>
      <ListTitle>Back-end</ListTitle>
      <ListParagraph>
        Experience with <br/>
        Node.js and Databases
      </ListParagraph>
    </ListContainer>
  </ListItem> 

  <ListItem>
    <DiZend size="3rem"/>
    <ListContainer>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>
        Experience with <br/>
        tools like Figma
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>

  </Section>
);

export default Technologies;
