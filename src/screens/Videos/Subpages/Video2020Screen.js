import React from "react";
import {
  ArticleTitle, ArticleDescription
} from "../../../components/text/Text";
import { ContainerLg } from "../../../components/section/Section";
import Footer from "../../../components/footer/Footer";
import Video from "../../../components/video/Video";

const Video2020Screen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>2020 Online Recital</ArticleTitle>
      <ArticleDescription>Our first ever online recital! Thank you to everyone who participated!</ArticleDescription>
      <Video id={'IFy-Yql3fow'} />
      <Footer />
    </ContainerLg>
  );
};

export default Video2020Screen;