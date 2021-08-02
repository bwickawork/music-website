import React from "react";

import images from "../../../components/images/Images";

import { ArticleTitle, ArticleDescription
 } from "../../../components/text/Text";
import { ContainerLg } from "../../../components/section/Section";
import Hero from "../../../components/hero/Hero";

const Article0Screen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>RCM Honors and Honors with Distinction</ArticleTitle>
      <ArticleDescription>This is description</ArticleDescription>
      <Hero image={images.Article0} />
    </ContainerLg>
  );
};

export default Article0Screen;