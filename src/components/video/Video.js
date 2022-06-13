import React from "react";
import { Container, TextContainer, Title, Divider } from "./styles";
import YouTube from "react-youtube";

const Video = ({ id, title, text }) => {
  const opts = {
    height: '500px',
    width: '100%',
    maxWidth: '100%',
    borderRadius: '4px'
  };

  return (
    <div style={{ margin: '0', width: '100%', flex: 1 }}>
      <Container>
        <YouTube
          opts={opts}
          style={{ borderRadius: '10px' }}
          videoId={id}
        />
      </Container>
      <TextContainer>
        <Title>{title}</Title>
        <div>{text}</div>
      </TextContainer>
      <Divider />
    </div>
  );
};

export default Video;