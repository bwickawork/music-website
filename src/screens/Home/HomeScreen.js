import React from "react";
import { ScreenContent, CarouselContainer, Content, CenterText, CenterTitle, CenterDivider, HomeNewsContent, List, ListDate, ListText } from "./styles";
import carousel1 from '../../assets/img/carousel1.jpeg';
import carousel2 from '../../assets/img/carousel2.jpeg';
import carousel3 from '../../assets/img/carousel3.jpeg';
import carousel4 from '../../assets/img/carousel4.jpeg';
import carousel5 from '../../assets/img/carousel5.jpeg';
import { NewsLink } from "../../components/text/Text";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "../../components/footer/Footer";
import { MdOutlineChevronRight } from 'react-icons/md';

const HomeScreen = () => {

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <ScreenContent>
      <CarouselContainer>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          autoFocus={false}
          stopOnHover={false}
          interval={8000}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          selectedItem={randomNumber(0, 4)}
          animationHandler={'fade'}
          swipeable={false}
        >
          <div>
            <img src={carousel4} style={{ height: '100vh', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={carousel5} style={{ height: '100vh', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={carousel3} style={{ height: '100vh', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={carousel2} style={{ height: '100vh', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={carousel1} style={{ height: '100vh', objectFit: 'cover' }} />
          </div>
        </Carousel>
      </CarouselContainer>
      <Content>
        <CenterText>With a highly effective blend of Asian and Western teaching methods, Young Robbins has provided quality piano instruction for over 30 years.</CenterText>
        <CenterDivider />
        <CenterTitle>Latest news</CenterTitle>
        <HomeNewsContent>
          <List>
            <>
              <ListText to={`/videos/recital22`} isLink={true}>
                <>
                  {'Studio recital on May 15, 2022 @ Mueseum of Making Music.'} {<NewsLink>{'Watch now'}<MdOutlineChevronRight size={22} style={{ marginLeft: 'auto' }} /></NewsLink>}
                </>
              </ListText>
              <ListDate>{'MAY 15, 2022'}</ListDate>
            </>
            <>
              <ListText to={`/news/seniors`} isLink={true}>
                <>
                  {'Congratulations to our 2 graduating Seniors, Emanuel Diaz and Karina Duvvuri!'} {<NewsLink>{'Learn more'}<MdOutlineChevronRight size={22} style={{ marginLeft: 'auto' }} /></NewsLink>}
                </>
              </ListText>
              <ListDate>{'Summer 2022'}</ListDate>
            </>
            <>
              <ListText to={`/news/awards`} isLink={true}>
                <>
                  {'Annual end of year Concert & Awards.'} {<NewsLink>{'View awards'}<MdOutlineChevronRight size={22} style={{ marginLeft: 'auto' }} /></NewsLink>}
                </>
              </ListText>
              <ListDate>{'Winter 2021'}</ListDate>
            </>
          </List>
        </HomeNewsContent>
      </Content>
      <Footer></Footer>
    </ScreenContent>
  );
};

export default HomeScreen;