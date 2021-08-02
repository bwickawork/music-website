import React from "react";
import { Row, Label, Input, TextArea, LabelTextArea } from "./styles";

const FormRow = ({title, placeholder, value, textarea }) => {
  return (
    <Row>
      {!textarea && <Label>{title}</Label>}
      {textarea && <LabelTextArea>{title}</LabelTextArea>}
      {!textarea && <Input type="text" placeholder={placeholder} /> }
      {textarea && <TextArea type="text" placeholder={placeholder} /> }
    </Row>
  );
};

export default FormRow;