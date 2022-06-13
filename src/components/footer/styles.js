import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  background: transparent;
  overflow: hidden;
  padding-top: 0px;
  margin-top: 200px;
  pointer-events: none;
  position: relative;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  z-index: 10;
  margin-bottom: 40px;
`;

export const Content = styled.article`
  pointer-events: auto;
  position: relative; 
  color: #8898aa;
  line-height: 30px;
  font-size: 15px;
  white-space: nowrap;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  @media (min-width: 880px) {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }

  @media (max-width: 880px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const LeftItem = styled.div`
  margin-right: 36px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 880px) {
    margin: 0 0 24px;
  }
`;

export const LeftItemText = styled.div`
  font-family: 'Roboto Mono';
  font-size: 24px;
  font-weight: 300;
  color: #000;
  letter-spacing: 20px;
`;

export const LeftItemBorder = styled.div`
  height: 16px;
  width: 2px;
  background-color: #000;
  margin-left: 30px;
  margin-right: 30px;
`;

export const CenterItem = styled.div`
  margin-left: 36px;
  margin-right: 36px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CenterItemText = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #000;
  font-weight: 300;
`;

export const RightItem = styled.div`
  margin-left: 36px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 880px) {
    margin: 24px 0 0;
  }
`;

export const RightItemText = styled.a`
  font-size: 14px;
  font-family: 'Roboto';
  color: #000;
  font-weight: 300;
  cursor: pointer;
  margin-left: 5px;
`;





export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(207,215,223,.25);
`;
