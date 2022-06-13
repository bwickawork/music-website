import React from "react";
import { ArticleTitle } from "../../components/text/Text";
import Footer from "../../components/footer/Footer";
import { VideoContainer, VideoItemContainer, VideoItemPlaceholder, VideoRow, VideoThumbnail, VideoTitle, VideoSubtitle } from "./styles";
import recital22 from '../../assets/img/recital2022.png';
import recital21 from '../../assets/img/recital2021.png';
import recital20 from '../../assets/img/recital2020.png';
import recital19 from '../../assets/img/recital2019.png';
import masterClass from '../../assets/img/masterclass.png';
const VideosScreen = () => {

  const VideoItem = ({ icon, title, subtitle, page }) => (
    <VideoItemContainer to={`videos/${page}`}>
      <VideoThumbnail src={icon}  />
      <VideoTitle>{title}</VideoTitle>
      <VideoSubtitle>{subtitle}</VideoSubtitle>
    </VideoItemContainer>
  );

  return (
    <VideoContainer>
      <ArticleTitle>Videos</ArticleTitle>
      <VideoRow>
        <VideoItem icon={recital22} title={'2022 May Recital'} page={'recital22'} subtitle={'Studio recital on May 15, 2022 @ Museum of Making Music.'} />
        <VideoItem icon={recital21} title={'2021 Spring Recital'} page={'recital21'} subtitle={'Studio recital in Spring 2021.'} />
        <VideoItem icon={recital20} title={'2020 Online Summer Recital'} page={'recital20'} subtitle={'Our first ever online studio recital, Summer 2020.'} />
      </VideoRow>
      <VideoRow>
        <VideoItem icon={masterClass} title={'Master Class w/ Maestro Lanzo Luconi'} page={'master-class'} subtitle={'September 2019, featuring instruction by Maestro Lanzo Luconi.'} />
        <VideoItem icon={recital19} title={'2019 Fall Recital'} page={'recital19'} subtitle={'Studio recital on September 29, 2019 @ Escondido Public Library.'} />
        <VideoItemPlaceholder />
      </VideoRow>
      <Footer />
    </VideoContainer>
  );
};

export default VideosScreen;