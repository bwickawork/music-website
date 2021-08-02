import styled from "styled-components";

export const FormSection = styled.section`
  max-height: 1200px;
  opacity: 1;
  -webkit-transition: max-height .7s;
  transition: max-height .7s;
  will-change: max-height;
  -webkit-transition-delay: .4s;
  transition-delay: .4s;
  position: relative;

  @media (min-width: 670px) {
    margin-top: -20px;
  }

  @media (min-width: 880px) {
    padding-bottom: 30px;
    margin-top: 50px;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 880px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
`;

export const RightColumn = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 645px;

  @media (min-width: 880px) {
    -webkit-box-flex: 4;
    -ms-flex: 4;
    flex: 4;
    max-width: none;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const LeftColumn = styled.div`
  padding-bottom: 45px;

  @media (min-width: 670px) {
    padding-bottom: 70px;
  }

  @media (min-width: 880px) {
    -webkit-box-flex: 6;
    -ms-flex: 6;
    flex: 6;
    padding-bottom: 0;
  }
`;

export const Card = styled.div`
  border-radius: 4px;
  -webkit-box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), 0 -18px 60px -10px rgb(0 0 0 / 3%);
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), 0 -18px 60px -10px rgb(0 0 0 / 3%);
  max-width: 645px;
  background: #fff;
  margin: 0 auto;

  @media (min-width: 880px) {
    margin: 0;
  }
`;

export const Form = styled.div`
  padding: 10px 10px 13px 15px;
  padding: 0;

  @media (min-width: 670px) {
      padding: 10px 18px 20px 24px;
  }
`;

export const SubmitRow = styled.div`
  text-align: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding: 12px 10px 13px 0;

  @media (min-width: 670px) {
    padding: 12px 0 0;
  }
`;

export const SubmitButton = styled.input`
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  -webkit-box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  background: #fff;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .025em;
  color: #6772e5;
  text-decoration: none;
  -webkit-transition: all .15s ease;
  transition: all .15s ease;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  color: #fff;
  background: #6772e5;

  &:hover {
    color: #fff;
    background-color: #7795f8;
    transform: translateY(-1px);
    -webkit-box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
    -webkit-box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }
`;

export const RightContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  @media (min-width: 880px) {
      padding-top: 200px;
  }

  @media (min-width: 670px) {
    padding-left: 24px;
    padding-right: 18px;
  }

  @media (min-width: 880px) {
      padding-left: 50px;
      padding-right: 0;
  }
`;

export const RightTitle = styled.p`
  color: #f9fbfd;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;

  @media (min-width: 880px){
    max-width: 335px;
  }
`;

export const RightList = styled.ul`
  margin-top: 20px;
  padding-left: 38px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    color: #fff;
    font-size: 17px;
    font-weight: 400;
    line-height: 25px;
    margin-bottom: 20px;
    position: relative;
    padding-right: 10px;
    
    @media (min-width: 880px) {
      max-width: 300px;
    }
  }
`;