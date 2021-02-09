import styled from "styled-components/macro";

export const Main = styled.div`
  height: 200px;
  background-color: #5634d1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: normal;
  color: #fff;
  margin: 0;
  display: flex;
  align-items: center;
  &::selection {
    background-color: #9c81ff;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  margin-left: 0.5rem;
`;
