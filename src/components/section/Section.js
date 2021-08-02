import styled from 'styled-components';

export const Section = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  grid-template-columns: 1fr auto;
  display: grid;
  grid-column-gap: 42px;
  margin-bottom: 40px;
  max-width: 1040px;
`;

export const SectionTitle = styled.h1`
  font-size: 21px;
  line-height: 32px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .025em;
`;


export const ContainerLg = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  margin-top: 30px;
`;

export const ContainerGrid = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media (min-width: 880px){
    display: grid;
    grid-column-gap: 85px;
    grid-template-columns: 94px 94px minmax(-webkit-min-content,530px);
    grid-template-columns: 94px 94px minmax(min-content,530px);
  }
`;

