import React from "react";
import { ArticleTitle, ArticleDescription
 } from "../../components/text/Text";
import { ContainerLg } from "../../components/section/Section";
import Video from "../../components/video/Video";

const VideosScreen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>Videos</ArticleTitle>
      <ArticleDescription>Watch the most recent performances by our talented students.</ArticleDescription>
      <Video id={'x7qrKYmHn0k'} date={'may 2020'} title={'Studio Recital (Part 1)'} text={'Studio recital live performance from May 2021. Part 1 is the Advanced level students.'} />
      <Video id={'NPxl5dd6qZ4'} date={'may 2020'} title={'Studio Recital (Part 2)'} text={'Studio recital live performance from May 2021. Part 2 is the Intermediate level students.'} />
      <Video id={'EIFNwQ-Amz0'} date={'may 2020'} title={'Studio Recital (Part 3)'} text={'Studio recital live performance from May 2021. Part 3 is the Beginner to Late Elementary level students.'} />
    </ContainerLg>
  );
};

export default VideosScreen;