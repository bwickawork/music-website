import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  height: 0;
  padding-top: 56.25%;
  padding-top: calc(100% * (9/16));
  position: relative;
  border-radius: 4px;
  margin-bottom: 50px;
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  max-width: 100%;
  border-radius: 4px;
`;

