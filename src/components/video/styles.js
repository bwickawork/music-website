import styled from 'styled-components';

export const Container = styled.div`
  max-width: 85%;
  width: 85%;
  height: 500px;
  border-radius: 4px;
  overflow: hidden;
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
  font-size: 14px;
  color: #525f7f;
  margin-bottom: 16px;
  white-space: nowrap;
  line-height: 28px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .025em;
`;

export const Title = styled.strong`
  margin-bottom: 15px;
  font-weight: 600;
  color: #32325d;
  width: 100%;
`;

export const TextContainer = styled.div`
  font-weight: 400;
  grid-column: 1/-1;
  display: inline-flex;
  flex-direction: column;
  flex: 2;
  font-size: 19px;
  line-height: 32px;
  color: #525f7f;
  max-width: 70%;

  @media (min-width: 880px) {
    grid-column: 2/-1;
    min-width: 600px;
  }
`;

export const Divider = styled.div`
  width: 85%;
  height: 1px;
  background-color: #f1f4f7;
  margin: 25px 0;
`