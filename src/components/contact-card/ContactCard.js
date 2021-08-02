import React from "react";
import { Container, Title, Email } from "./styles";

const ContactCard = () => {
  return (
    <Container>
      <Title>Contact me</Title>
      <Email>youngrobbinsmusic@gmail.com</Email>
      <Title marginTop={44}>Oceanside, CA</Title>
    </Container>
  );
};

export default ContactCard;