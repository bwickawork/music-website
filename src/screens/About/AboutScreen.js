import React from "react";

import images from "../../components/images/Images";

import { ArticleTitle, ArticleDescription
 } from "../../components/text/Text";
import { ContainerLg } from "../../components/section/Section";
import Hero from "../../components/hero/Hero";

import StudioPolicySection from "./StudioPolicySection";

const AboutScreen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>About</ArticleTitle>
      <ArticleDescription>Located in Oceanside, California, Young Robbins Music Studio has been providing quality piano instruction for over 30 years. With a highly effective blend of Asian and Western teaching methods, Young Robbins has produced many students with outstanding performance and Certificate of Merit results, all at Branch and/or State Honors.</ArticleDescription>
      <Hero image={images.Oceanside} />
      <StudioPolicySection />
    </ContainerLg>
  );
};

export default AboutScreen;