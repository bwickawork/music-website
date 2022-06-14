import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 12px 24px;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  background: transparent;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  cursor: pointer;
  margin-bottom: 50px;
  margin-top: -12px;
  transition: .2s ease-in;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background: #000;
    color: #fff;

    * {
      color: #fff;
    }
  }

  @media (max-width: 880px) {
    width: 95%;
    text-align: center;
    justify-content: center;
  }
`;

export const ButtonRef = styled.a`
  color: #000;
  font-size: 14px;
  font-family: 'Roboto Mono';
  font-weight: 400;
  margin-left: 10px;
`;
