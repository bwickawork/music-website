import styled from 'styled-components';
import { theme } from '../../styles/theme';

import featured from '../../assets/img/featured1.png';

export const Container = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1040px;
  
  @media (min-width: 670px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 92px;
    padding: 0 20px;
  }
`;
export const List = styled.div`
  margin: 0 -13px;
  grid-template-columns: repeat(1,1fr);
  grid-gap: 25px;
  margin-bottom: 40px;
  margin-top: 15px;
  @media (min-width: 670px) {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-template-columns: repeat(3,1fr);
  }
`;

export const Article = styled.article`
  --transition-duration: 300ms;
  --transition-timing-function: cubic-bezier(.215,.61,.355,1);
  position: relative;
`;

export const ItemContainer = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  height: 100%;
  min-height: 380px;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 30px 60px -12px rgb(50 50 93 / 25%), 0 18px 36px -18px rgb(0 0 0 / 30%), 0 -12px 36px -8px rgb(0 0 0 / 3%);
    opacity: 0;
    border-radius: 4px;
    transition: transform var(--transition-duration) var(--transition-timing-function),opacity .17s var(--transition-timing-function);
    z-index: 0;
    transform: scale(.92);
  }
`;

export const Image = styled.div`
  background-image: url(${featured});
  height: 0;
  width: 100%;
  padding-top: calc((9% / 16) * 100);
  overflow: hidden;
  position: relative;
  clip-path: inset(8% 4% 0 4% round 4px 4px 4px 4px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  z-index: 1;
}
`;

export const ArticleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 15px 24px;
  flex-grow: 1;
  z-index: 1;
`;

export const Date = styled.span`
  display: block;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  color: #aab7c4;
`;

export const Title = styled.h6`
  color: ${theme.dark};
  line-height: 26px;
  margin: 10px 0;
  transition: color .1s;
  font-weight: 600;
  font-size: 19px;
`;

export const Description = styled.div`
  color: #525f7f;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
`;



