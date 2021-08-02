import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f6f9fc;
  border-radius: 4px;
  overflow: hidden;
  padding: 124px 44px;
  margin-top: 40px;

  @media (min-width: 670px) {
    margin-top: 0;
    padding: 64px 44px;
  }
`;

export const Title = styled.h2.attrs(props => ({
  marginTop: props.marginTop || '0',
}))`
  color: ${theme.dark};
  z-index: 1;
  font-size: 17px;
  line-height: 28px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .025em;
  margin-top: ${props => props.marginTop}px;
`;

export const Email = styled.a`
  color: ${theme.dark};
  color: #6772e5;
  font-weight: 600;
  -webkit-transition: color .1s ease;
  transition: color .1s ease;
  cursor: pointer;
  font-size: 17px;
  line-height: 28px;
`;