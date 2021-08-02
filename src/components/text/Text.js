import styled from 'styled-components';
import '../../index.css';
import { theme } from '../../styles/theme';


export const MinorTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #aab7c4;
  text-transform: uppercase;
  margin: 0 0 12px;
  font-family: 'Nunito Sans'
`;

export const CardTitle = styled.h2`
  font-weight: 600;
  margin: 0 0 10px;
  line-height: 32px;
  color: #32325d;
  transition: color .1s;
  font-family: 'Nunito Sans'
`;

export const CardText = styled.h3`
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
  color: #525f7f;
`;

export const NewsTitle = styled.h1`
  font-weight: 400;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #32325d;
  letter-spacing: -.01em;
  font-size: 50px;
  line-height: 68px;
  padding-top: 80px;
`;

export const NewsLink = styled.strong`
transition: color .1s;
font-weight: 600;
font-size: 19px;
line-height: 32px;
color: ${theme.primary};
cursor: pointer;
display: inline-flex;
align-items: center;
`;

export const ArticleTitle = styled.h1`
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 34px;
  line-height: 44px;
  color: #32325d;
  padding-top: 80px;
  @media (min-width: 670px) {
    font-size: 42px;
    line-height: 52px;
  }
`;

export const ArticleDescription = styled.h2`
  color: #525f7f;
  margin-bottom: 32px;
  margin-top: 15px;
  font-weight: 400;
  font-size: 19px;
  line-height: 32px;
`;

