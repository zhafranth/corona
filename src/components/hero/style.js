import styled, { keyframes } from "styled-components/macro";

export const MainHero = styled.div`
  position: relative;
  padding: 4rem 12vw;
  height: 70vh;
  display: flex;
  background-color: #f4f9ff;
  box-sizing: border-box;
  justify-content: space-between;
`;
export const HeroContent = styled.div`
  width: 30%;
  z-index: 2;
`;
export const TitleContent = styled.h2`
  font-weight: bold;
  font-size: 58px;
  color: #5634d1;
`;
export const DescContent = styled.p`
  font-size: 24px;
  font-weight: normal;
  color: #89859a;
`;
export const HeroTracker = styled.div`
  width: 65%;
`;
export const TitleTracker = styled.div`
  font-size: 28px;
  color: #5634d1;
  font-weight: 500;
  span {
    color: #0d003a;
  }
`;
export const DescTracker = styled.div`
  font-size: 18px;
  color: #89859a;
  font-weight: normal;
  span {
    color: #0d003a;
  }
`;
export const WrapperTracker = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2.1rem;
`;

export const BgHero = styled.img`
  position: absolute;
  top: 0;
  left: -40px;
  z-index: 1;
`;

export const BgVirus = styled.img`
  position: absolute;
  z-index: 2;
`;
