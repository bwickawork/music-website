import React from "react";

import { Container, Image } from "./styles";

const Hero = ({ image }) => {

  return (
    <Container>
      <Image src={image.default} alt="hero" />
    </Container>
  );
};

export default Hero;