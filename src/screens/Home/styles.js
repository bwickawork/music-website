import styled from 'styled-components';
import '../../index.css';


export const ScreenContent = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  margin-top: 75px;
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
