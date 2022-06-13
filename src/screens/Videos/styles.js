import styled from 'styled-components';
import '../../index.css';
import { Link } from 'react-router-dom';

export const VideoContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 36px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const VideoRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 72px;
  margin-bottom: 80px;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

export const VideoItemContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  cursor: pointer;

  @media (max-width: 880px) {
    margin-bottom: 80px;
  }
`;

export const VideoItemPlaceholder = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 4px;
`;

export const VideoTitle = styled.div`
  font-family: 'Roboto';
  color: #000;
  font-weight: 300;
  font-size: 16px;
  margin-top: 30px;
`;

export const VideoSubtitle = styled.p`
  font-family: 'Roboto';
  color: #000;
  opacity: 0.7;
  font-weight: 300;
  font-size: 14px;
  margin-top: 16px;
`;