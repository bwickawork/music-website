import React from "react";
import { ButtonContainer } from "./styles";

const AppButton = ({ text, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default AppButton;