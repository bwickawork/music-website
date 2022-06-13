import styled from 'styled-components';
import '../../../index.css';

export const PairOfImages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PairImage = styled.img`
  max-width: 49%;
  border-radius: 4px;
  object-fit: cover;
  height: 500px;
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-top: 36px;
`;

export const Title = styled.h3`
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: 400;
  color: #000;
  line-height: 32px;
  margin-bottom: 24px;
`;

export const AwardsTitle = styled.h3`
  font-family: 'Roboto Mono';
  font-size: 24px;
  font-weight: 300;
  color: #000;
  line-height: 32px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 300;
  color: #000;
  line-height: 32px;
  margin-bottom: 50px;
`;