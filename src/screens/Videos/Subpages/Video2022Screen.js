import React from "react";
import {
  ArticleTitle, ArticleDescription
} from "../../../components/text/Text";
import { ContainerLg } from "../../../components/section/Section";
import Footer from "../../../components/footer/Footer";
import Video from "../../../components/video/Video";
import AppButton from "../../../components/button/AppButton";
import LinkButton from "../../../components/button/LinkButton";

const Video2022Screen = () => {

  return (
    <ContainerLg>
      <ArticleTitle>2022 May Recital</ArticleTitle>
      <ArticleDescription>Studio recital on May 15, 2022 @ Museum of Making Music.</ArticleDescription>
      <ArticleDescription>To view participants and perfomance schedule, click below to view the recital program.</ArticleDescription>
      <LinkButton text={'View recital program'} />
      <Video id={'zymmo_9aRxw'} title={'Part 1: Prep - Level 5'} />
      <Video id={'vTMtxk71DHg'} title={'Part 2: Level 6 and above'} />
      <Footer />
    </ContainerLg>
  );
};

export default Video2022Screen;