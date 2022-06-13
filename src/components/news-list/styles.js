import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;

  h1 {
    color: #32325d;
    margin-bottom: 15px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 36px;
  grid-row-gap: 18px;
  grid-auto-flow: dense;
  margin: 18px 0;
`;

export const ListText = styled(Link)`
  grid-column: 2;
  font-family: 'Roboto';
  transition: color .1s;
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  color: #000;
  cursor: ${props => props.isLink ? `pointer` : `text`};
`;

export const ListDate = styled.h4`
  font-family: 'Roboto Mono';
  grid-column: 1;
  display: block;
  position: relative;
  top: 6px;
  font-size: 15px;
  color: #000;
  text-transform: uppercase;
  font-weight: 400;
`;

export const Divider = styled.hr`
  margin: 0;
  border: 0;
  border-top: 1px solid #000;
  grid-column: 1/-1;
  width: 100%;
`;

export const MoreNews = styled.button`
  align-self: flex-end;
  font-weight: 600;
  text-align: right;
  font-size: 15px;
  color: #6772e5;
  transition: color .1s ease;
  cursor: pointer;
  line-height: 28px;
  text-transform: uppercase;
  letter-spacing: .025em;
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
`;

