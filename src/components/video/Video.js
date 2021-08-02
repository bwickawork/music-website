import React from "react";
import { Container, DateContainer, Date, TextContainer, Title, Divider } from "./styles";
import YouTube from "react-youtube";

const Video = ({ id, date, title, text }) => {
  const opts = {
    height: '500px',
    width: '100%',
    maxWidth: '100%',
    borderRadius: '10px'
  };

  return (
    <div style={{margin: '50px 0'}}>
      <Container>
        <YouTube
          opts={opts}
          style={{borderRadius: '10px'}}
          videoId={id}
        />
      </Container>
      <DateContainer><Date>{date}</Date></DateContainer>
      <TextContainer>
        <Title>{title}</Title>
        <div>{text}</div>
      </TextContainer>
      <Divider />
    </div>
  );
};

export default Video;