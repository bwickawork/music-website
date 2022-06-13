import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  overflow: hidden;
  margin-right: 32px;
`;

export const DateContainer = styled.div`
  margin-bottom: 30px;
  display: inline-flex;
  flex: 1;
  justify-content: space-between;
  height: 150px;
  margin-top: 40px;
  margin-bottom: 30px;
  grid-column: 1;

  @media (min-width: 670px) {
    padding-right: 70px;
    position: -webkit-sticky;
    position: sticky;
    height: 150px;
    top: 40px;
    margin-bottom: 0;
}
`;

export const Date = styled.p`
  font-family: 
  font-size: 14px;
  color: #000;
  margin-bottom: 16px;
  white-space: nowrap;
  line-height: 28px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .025em;
`;

export const Title = styled.h3`
  font-family: 'Roboto';
  margin-top: 16px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 300;
  color: #000;
  width: 100%;
`;

export const TextContainer = styled.div`
  width: 100%;
  font-family: 'Roboto';
  font-weight: 300;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  line-height: 32px;
  color: #000;
  max-width: 70%;
`;

export const Divider = styled.div`
  width: 85%;
  height: 1px;
  background-color: #f1f4f7;
  margin: 25px 0;
`