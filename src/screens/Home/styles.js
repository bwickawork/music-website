import styled from 'styled-components';
import '../../index.css';
import { Link } from 'react-router-dom';


export const ScreenContent = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 36px 60px;
  margin: 0 auto;
`;

export const CenterText = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #000;
  font-weight: 300;
  text-align: center;
  line-height: 32px;
`;

export const CenterTitle = styled.h2`
  font-size: 20px;
  line-height: 32px;
  text-transform: uppercase;
  font-family: 'Roboto Mono';
  color: #000;
  font-weight: 300;
  text-align: center;
  margin-bottom: 30px;
`;

export const CenterDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 60px 0;
`;

export const HomeNewsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NewsDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 36px;
  grid-row-gap: 36px;
  grid-auto-flow: dense;
  margin: 18px 0;
  text-align: left;
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

export const CardImageContent = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &:before {
    content: "";
    width: 48%;
    position: absolute;
    left: 0;
    top: 50%;
    height: 150%;
    background-color: #fff;
    transform: translate(-60px,-50%) rotate(12deg);
    z-index: 1;
    transition: transform .2s ease-out;
  }

  img {
    position: absolute;
    max-height: none;
    width: 65%;
    right: 0;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardTextContent = styled.div`
  flex: 0.35;
  width: 35%;
  height: 100%;
  padding: 20px 0 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  position: relative;
`;
