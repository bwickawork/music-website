import React from "react";

import { ArticleTitle
 } from "../../components/text/Text";
import { ContainerLg } from "../../components/section/Section";
import NewsList from "../../components/news-list/NewsList";

import Footer from "../../components/footer/Footer";

const NewsScreen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>News</ArticleTitle>
      <NewsList hideTitle={true} hideMore={true} />
      <Footer></Footer>
    </ContainerLg>
  );
};

export default NewsScreen;