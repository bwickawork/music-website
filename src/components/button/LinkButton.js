import React from "react";
import { ButtonContainer, ButtonRef } from "./styles";
import Pdf from "../../assets/pdf/recital2022.pdf";
import { MdEventNote } from "react-icons/md";

const LinkButton = ({ text }) => {
  return (
    <ButtonContainer>
       <MdEventNote color={'#000'} size={18} />
      <ButtonRef href={Pdf} target="_blank">{text}</ButtonRef>
    </ButtonContainer>
  );
};

export default LinkButton;