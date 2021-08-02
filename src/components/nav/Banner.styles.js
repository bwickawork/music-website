import styled from "styled-components";

export const Container = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  left: 0;
  top: 70px;
  right: 0;
  z-index: 499;
  z-index: calc(500 - 1);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: .025em;
  text-transform: uppercase;
  padding: 12px 0;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 32px;
  justify-content: space-between;
`;

export const Title = styled.a`
  margin: 0;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 600;
  color: #32325d;
  font-size: 19px;
  line-height: 32px;
`;

export const Location = styled.a`
  font-size: 13px;
  font-weight: 700;
  color: #aab7c4;
  letter-spacing: 0;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: color .1s;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;