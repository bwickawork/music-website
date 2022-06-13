import React from "react";
import images from "../../../components/images/Images";
import {
  ArticleTitle, ArticleDescription
} from "../../../components/text/Text";
import { ContainerLg } from "../../../components/section/Section";
import { PairImage, PairOfImages, TextContainer, Text, Title } from "./styles";
import Footer from "../../../components/footer/Footer";

const Article0Screen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>Graduating Seniors</ArticleTitle>
      <ArticleDescription>Class of 2022</ArticleDescription>
      <PairOfImages>
        <PairImage src={images.Senior2.default} />
        <PairImage src={images.Senior1.default} />
      </PairOfImages>
      <TextContainer>
        <Title>Emanuel Diaz</Title>
        <Text>
          A senior at San Marcos High School, Emmanuel has been playing piano for 5 years. He has participated in many festivals and competitions, and has won various events including last month’s Honors Competition for 3rd place in his division! He has also participated in Honors State Competition and Sonata Competition. Other activities of his include Soccer, Track, and Master Classes with Mr. Lanzo Luconi & Mr. Ian Goh. He received State Honors CM 10.
          He will be attending San Diego State University in the upcoming year with a double major in Music & Mechanical Engineering in mind. Best wishes to Emanuel!
        </Text>
        <Title>Karina Duvvuri</Title>
        <Text>
          Also a senior at San Marcos High, Karina has been playing piano for 7 years. She has received State honors CM 10 and has played in many festivals and performances throughout the years. She participated in the Master class with Mr. Lanzo Luconi.  She was invited to the Piano Auditions, labeled as one of the Spring Festival Judges favorite performers, and played in Christmas Concerts.
          Karina is on her high school's varsity lacrosse team and serves as the President of the Fellowship of Christian Athletes club. Karina will be studying Health Sciences on the Physical Therapy track at the University of Dallas, in Texas. She thanks Mrs. Robbins for being like a second Mom and for providing not only lessons on piano, but also lessons on life. Best wishes to Karina and we will miss you!
        </Text>
      </TextContainer>
      <Footer />
    </ContainerLg>
  );
};

export default Article0Screen;