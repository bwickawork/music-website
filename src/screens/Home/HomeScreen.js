import React from "react";
import Card from "../../components/card/Card";

import { MinorTitle, CardTitle, CardText } from "../../components/text/Text";
import { ScreenContent, CardImageContent, CardTextContent } from "./styles";
import { Section } from "../../components/section/Section";
import NewsList from "../../components/news-list/NewsList";
import image from '../../assets/img/piano.jpeg';
import FeaturedSection from "../../components/section/FeaturedSection";
  
import ContactCard from "../../components/contact-card/ContactCard";
  
const HomeScreen = () => {
  return (
    <ScreenContent>
      <Card>
        <CardImageContent>
          <img src={image} alt="feature" />
        </CardImageContent>
        <CardTextContent>
          <MinorTitle>Welcome</MinorTitle>
          <CardTitle>Music enrichment for life!</CardTitle>
          <CardText>With a highly effective blend of Asian and Western teaching methods, Young Robbins has provided quality piano instruction for over 30 years.</CardText>
        </CardTextContent>
      </Card>
      <Section>
        <NewsList itemLimit={4} />
        <ContactCard />
      </Section>
      <FeaturedSection>

      </FeaturedSection>
    </ScreenContent>
  );
};

export default HomeScreen;