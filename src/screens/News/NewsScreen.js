import React from "react";

import { NewsTitle
 } from "../../components/text/Text";
import { ContainerLg } from "../../components/section/Section";
import NewsList from "../../components/news-list/NewsList";

const NewsScreen = () => {
  return (
    <ContainerLg>
      <NewsTitle>News</NewsTitle>
      <NewsList hideTitle={true} hideMore={true} />
    </ContainerLg>
  );
};

export default NewsScreen;