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
  background: #f6f9fc;
`;

export const Content = styled.article`
  pointer-events: auto;
  position: relative; 
  padding: 65px 0 55px;
  color: #8898aa;
  line-height: 30px;
  font-size: 15px;
  white-space: nowrap;
  
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  height: 180px;
  @media (min-width: 880px) {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
`;
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(207,215,223,.25);
`;
