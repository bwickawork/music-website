import React from "react";
import { Container, Content, FlexContainer, Title, Location } from "./Banner.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
const Banner = () => {

  return (
    <Container>
      <Content>
        <FlexContainer>
          <Title>Private piano lessons</Title>
          <Location>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{fontSize: '12px', marginRight: '6px', marginBottom: '2px'}} />
            Oceanside, California
          </Location>
        </FlexContainer>
      </Content>
    </Container>
  );
};


export default Banner;