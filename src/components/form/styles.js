import styled from "styled-components";


export const Row = styled.div`
  padding: 8px 13px 2px 17px;
  border-bottom: 1px solid #e6eef8;
  -webkit-transition: opacity .2s ease-in,height .2s ease-out;
  transition: opacity .2s ease-in,height .2s ease-out;

  @media (min-width: 670px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: none;
    padding: 4px 0;
    max-width: 600px;
  }
`;

export const Label = styled.label`
  font-family: 'Roboto Mono';
  color: #000;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: .43px;
  line-height: 26px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  text-transform: uppercase;
  -webkit-transition: color .1s ease-out;
  transition: color .1s ease-out;

  @media (min-width: 670px) {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 26px;
    margin-right: 20px;
    -ms-flex-item-align: center;
    align-self: center;
    -webkit-box-flex: 32%;
    -ms-flex: 32%;
    flex: 32%;
    text-transform: none;
  }
`;

export const LabelTextArea = styled.label`
  font-family: 'Roboto Mono';
  color: #000;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: .43px;
  line-height: 26px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  text-transform: uppercase;
  -webkit-transition: color .1s ease-out;
  transition: color .1s ease-out;

    
  align-self: flex-start;
  padding-top: 7px;

  @media (min-width: 670px) {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 26px;
    margin-right: 20px;
    -webkit-box-flex: 32%;
    -ms-flex: 32%;
    flex: 32%;
    text-transform: none;
  }

`;

export const Input = styled.input`
  align-self: center;
  display: block;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 4px;
  color: #000;
  font-weight: 300;
  font-size: 17px;
  line-height: 26px;
  padding: 5px 20px 8px 0;
  -webkit-transition: background-color .1s ease-in,color .1s ease-in;
  transition: background-color .1s ease-in,color .1s ease-in;
  font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  @media (min-width: 670px) {
    background-color: #f7f7f7;
    padding: 5px 20px 8px 13px;
    -webkit-box-flex: 68%;
    -ms-flex: 68%;
    flex: 68%;
    width: auto;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 4px;
  color: #000;
  font-weight: 300;
  font-size: 17px;
  line-height: 26px;
  padding: 5px 20px 8px 0;
  -webkit-transition: background-color .1s ease-in,color .1s ease-in;
  transition: background-color .1s ease-in,color .1s ease-in;
  font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

  @media (min-width: 670px) {
    background-color: #f7f7f7;
    padding: 5px 20px 8px 13px;
    -webkit-box-flex: 68%;
    -ms-flex: 68%;
    flex: 68%;
    width: auto;
  }

  -ms-flex-item-align: start;
  align-self: flex-start;
  min-height: 83px;
  padding: 7px 20px 7px 0;

  @media (min-width: 670px) {
    min-height: 140px;
    padding: 7px 20px 7px 13px;
  }
`;