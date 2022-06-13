import React from "react";
import {
  ArticleTitle, ArticleDescription
} from "../../../components/text/Text";
import { ContainerLg } from "../../../components/section/Section";
import Footer from "../../../components/footer/Footer";
import Video from "../../../components/video/Video";

const VideoMasterScreen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>Master Class with Maestro Lanzo Luconi</ArticleTitle>
      <ArticleDescription>September 2019, featuring instruction by Maestro Lanzo Luconi.</ArticleDescription>
      <Video id={'VXSCnE6fOE0'} title={'Part 1 - Clarisa'} />
      <Video id={'ZwKE1c95UG0'} title={'Part 2 - Jamie'} />
      <Video id={'zJ0GZ19gH14'} title={'Part 3 - Karina'}  />
      <Video id={'62W6lri4nDk'} title={'Part 4 - Sophia'}  />
      <Video id={'y-YDYrWpqMc'} title={'Part 5 - Victoria'}  />
      <Video id={'Y-nggsb4nYU'} title={'Part 6 - Victoria part 2'}  />
      <Footer />
    </ContainerLg>
  );
};

export default VideoMasterScreen;