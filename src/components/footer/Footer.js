import React from "react";
import { Container, Content, Wrapper, Divider, LeftItem, LeftItemText, LeftItemBorder, CenterItem, CenterItemText, RightItem, RightItemText } from "./styles";

import { AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      {/* <Divider /> */}
      <Content>
        <Wrapper>
          <LeftItem>
            <LeftItemText>YR</LeftItemText>
            <LeftItemBorder />
            <RightItemText>© {year} Young Robbins</RightItemText>
          </LeftItem>
          <CenterItem>
            <CenterItemText>Piano lessons for Coastal North County, San Diego</CenterItemText>
          </CenterItem>
          <RightItem>
            <AiOutlineYoutube color={'#000'} size={20}/>
            <RightItemText>Youtube</RightItemText>
            <LeftItemBorder />
            <RightItemText>About this site</RightItemText>
          </RightItem>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Footer;