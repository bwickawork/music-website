import React from "react";
import images from "../../../components/images/Images";
import {
  ArticleTitle, ArticleDescription
} from "../../../components/text/Text";
import { ContainerLg } from "../../../components/section/Section";
import { TextContainer, Text, AwardsTitle } from "./styles";
import Footer from "../../../components/footer/Footer";
import Hero from "../../../components/hero/Hero";
import { CenterDivider } from "../../Home/styles";
import { theme } from "../../../styles/theme";

const ArticleAwardsScreen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>End of year Concert and Awards</ArticleTitle>
      <ArticleDescription>2022</ArticleDescription>
      <Hero image={images.Awards} />
      <TextContainer>
        <AwardsTitle>CM & RCM Promotions acknowledgements</AwardsTitle>
        <Text>
          <span style={{ fontWeight: 400 }}>CM/RCM: Achievment Certificates and medal awards (17): </span>
          Aurora, Rebecca, Maxwell, Olivia, Chris, Sofia, Gavin, Mia, Christian,
          Garland, Rachael, Jamie, Eunna, Tan, Lucas, Karina, Emanuel
          <br /><br />
          <span style={{ fontWeight: 400 }}>Theory 100% trophy:</span> Aurora Tsay
          <br /><br />
          <span style={{ fontWeight: 400 }}>RCM Recognition medal awards:</span> Gavin Li and Mia Yi
          <br /><br />
          <span style={{ fontWeight: 400 }}>Senior CM Final Medallion:</span> Karina Duvvuri & Emanuel Diaz
          <br /><br />
          <span style={{ fontWeight: 400 }}>CAPMT Winter Festival:</span> Maxwell Billing, Christian Guimet, Emanuel Diaz
        </Text>
        <CenterDivider />
        <AwardsTitle>Annual Studio Awards</AwardsTitle>
        <Text>
          🏆<span style={{ fontWeight: 400, marginLeft: 10 }}>Studio Student of the Year: </span><span style={{ color: theme.primary, fontWeight: 400 }}>Karina Duvvuri</span>
          <br /><br />
          <span style={{ fontWeight: 400 }}>Excellence in Progress Award (Most improved):</span> Olivia Messoline, Garland Tague, Rachael Lee
          <br /><br />
          <span style={{ fontWeight: 400 }}>Most versatile musician Award (Most involved in music outside of piano studio:):</span> Jamie Lee
          <br /><br />
          <span style={{ fontWeight: 400 }}>Excellence in Performance Award (Demonstrates Virtuoso performance):</span> Gavin Li, Lucas Leung, Christian Guimet
          <br /><br />
          <span style={{ fontWeight: 400 }}>Outstanding Achievement Awards (All areas of musical study &amp; best effort to achieve top scores of every event):</span> Mia Yi, and Tan Vu
          <br /><br />
          <span style={{ fontWeight: 400 }}>Outstanding Musician Award:</span> Emanuel Diaz
          <br /><br />
          <span style={{ fontWeight: 400 }}>Special Award:</span> Mrs. Shiqi Li &amp; Mrs. Kay Lee
          <br /><br />
          <span style={{ fontWeight: 400 }}>Senior Scholarship Monetary Awards:</span>
          <ul style={{ marginInlineStart: 30 }}>
            <li>MTAC awards: awarded 2 nd place: Emanuel Diaz</li>
            <li>CAPMT awards with matching funds: Karina Duvvuri</li>
            <li>Robbins Music Studio Award: Karina Duvuuri &amp; Emanuel Diaz</li>
            <li>Mr.&amp; Mrs. Felkins Awards: Emanuel Diaz</li>
          </ul>
        </Text>
      </TextContainer>
      <Footer />
    </ContainerLg>
  );
};

export default ArticleAwardsScreen;