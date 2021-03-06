import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 20px 0 80px;
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 0px;
  width: 100%;
  max-width: 1040px;
`;

export const Header = styled.div`
  text-align: left;
  padding-bottom: 36px;
`;

export const Title = styled.h2`
  font-family: 'Roboto Mono';
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: .025em;
  color: #000;

  @media (min-width: 670px) {
    font-size: 21px;
    line-height: 32px;
  }
`;

export const Subtitle = styled.h3`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  color: #000;
`;

export const Groups = styled.div`
  position: relative;
  display: grid;
  grid-gap: 40px 0;
  gap: 40px 0;
  margin: 0 0 40px;

  @media (min-width: 670px) {
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-gap: 30px 30px;
    gap: 30px 30px;
    margin: 0 0 30px;
  }

  @media (min-width: 880px) {
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-gap: 40px 70px;
    gap: 40px 70px;
    margin: 0 0 40px;
  }
`;

export const ItemTitle = styled.h5`
  font-family: 'Roboto Mono';
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -1px;
  color: #000;
  margin: 16px 0 0;
`;

export const Image = styled.img`
  height: 55px;
`;

export const Checklist = styled.ul`
  font-family: 'Roboto'; 
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #6b7c93;
  margin: 16px 0 0;
  list-style: none;
`;

export const ChecklistItem = styled.li`
  padding: 5px 0;
  position: relative;
  -webkit-transition: color .15s ease-in-out;
  transition: color .15s ease-in-out;

  &:before {
    content: "";
    display: inline-block;
    margin: 0 7px 0 -18px;
    width: 11px;
    height: 10px;
    background: url(/src/assets/img/art.png;
  }
`;