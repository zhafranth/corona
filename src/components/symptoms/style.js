import styled from "styled-components/macro";

export const Main = styled.div`
  padding: 4rem 12vw;
  /* .rec-pagination {
    display: none;
  } */
`;
export const Item = styled.div`
  width: 167px !important;
  outline: none;
`;
export const Title = styled.h3`
  font-weight: normal;
  font-size: 18px;
  color: #0d003a;
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;
export const Image = styled.img`
  @media screen and (max-width: 576px) {
    transform: scale(0.5);
  }
`;

export const TitleMain = styled.h2`
  text-align: center;
  color: #5634d1;
  font-weight: bold;
  font-size: 36px;
`;
