import React from "react";
import {
  ArticleTitle, ArticleDescription
} from "../../../components/text/Text";
import { ContainerLg } from "../../../components/section/Section";
import Footer from "../../../components/footer/Footer";
import Video from "../../../components/video/Video";

const Video2021Screen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>2021 Spring Recital</ArticleTitle>
      <ArticleDescription>Studio recital in Spring 2021</ArticleDescription>
      <Video id={'x7qrKYmHn0k'} title={'Part 1 - Advanced Students'} />
      <Video id={'NPxl5dd6qZ4'} title={'Part 2 - Intermediate Students'} />
      <Video id={'EIFNwQ-Amz0'} title={'Part 3 - Beginner Students'}  />
      <Footer />
    </ContainerLg>
  );
};

export default Video2021Screen;