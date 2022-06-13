import React from "react";
import {
  ArticleTitle, ArticleDescription
} from "../../../components/text/Text";
import { ContainerLg } from "../../../components/section/Section";
import Footer from "../../../components/footer/Footer";
import Video from "../../../components/video/Video";

const Video2019Screen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>2019 Fall Recital</ArticleTitle>
      <ArticleDescription>Studio recital on September 29, 2019 @ Escondido Public Library.</ArticleDescription>
      <Video id={'lduLK-zf_nk'} title={'Part 1'} />
      <Video id={'1mIlaHdcEoY'} title={'Part 2'} />
      <Video id={'sRdEbcC1QwA'} title={'Part 3'}  />
      <Video id={'KepCUKs49rY'} title={'Part 4'}  />
      <Video id={'K1fVkP4tvok'} title={'Part 5'}  />
      <Footer />
    </ContainerLg>
  );
};

export default Video2019Screen;