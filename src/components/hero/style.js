import styled, { keyframes } from "styled-components/macro";

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const MainHero = styled.div`
  position: relative;
  padding: 4rem 12vw;
  /* height: 70vh; */
  display: flex;
  background: linear-gradient(
      357.42deg,
      #8cb2df -12.52%,
      rgba(255, 255, 255, 0) 22.97%
    ),
    #f4f9ff;
  box-sizing: border-box;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 576px) {
    background: linear-gradient(
        351.28deg,
        #2b1285 11.4%,
        rgba(86, 52, 209, 0) 93.79%
      ),
      #5634d1;
  }
`;
export const HeroContent = styled.div`
  width: 30%;
  z-index: 2;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const TitleContent = styled.h2`
  font-weight: bold;
  font-size: 58px;
  color: #5634d1;

  &::selection {
    background-color: #9c81ff;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    font-size: 48px;
    margin: 20px 0;
  }
  @media screen and (max-width: 576px) {
    color: #fff;
  }
`;
export const DescContent = styled.p`
  font-size: 24px;
  font-weight: normal;
  color: #89859a;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 576px) {
    color: #d1c5ff;
  }
`;
export const HeroTracker = styled.div`
  width: 65%;
  z-index: 2;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
export const TitleTracker = styled.div`
  font-size: 28px;
  color: #5634d1;
  font-weight: 500;
  span {
    color: #0d003a;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
  @media screen and (max-width: 576px) {
    color: #9c81ff;
    span {
      color: #fff;
    }
  }
`;
export const DescTracker = styled.div`
  font-size: 18px;
  color: #89859a;
  font-weight: normal;
  span {
    color: #0d003a;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
  @media screen and (max-width: 576px) {
    color: #9c81ff;
    span {
      color: #fff;
    }
  }
`;
export const WrapperTracker = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2.1rem;
  @media screen and (max-width: 768px) {
    gap: 1.2rem;
    justify-content: center;
  }
`;

export const BgHero = styled.img`
  position: absolute;
  top: 0;
  left: -40px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BgVirus = styled.img`
  position: absolute;
  z-index: 2;
`;

export const WrapperVirus = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 30vw;
  height: 100%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  .virus {
    position: absolute;
  }
  #virus1.virus {
    margin-left: 15vw;
    margin-top: 2rem;
    animation-name: spin;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @media screen and (max-width: 576px) {
      margin-left: -5vw;
      margin-top: -5vh;
    }
  }
  #virus2.virus {
    margin-left: 27vw;
    margin-top: 35vh;
    animation-name: spin;
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @media screen and (max-width: 1024px) {
      margin-left: 65vw;
      margin-top: 24vh;
    }
  }
  #virus3.virus {
    margin-left: 14vw;
    margin-top: 42vh;
    animation-name: spin;
    animation-duration: 25s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @media screen and (max-width: 1024px) {
      margin-left: 45vw;
      margin-top: 28vh;
    }
    @media screen and (max-width: 576px) {
      margin-left: 7vw;
    }
  }
  #virus4.virus {
    margin-left: 22vw;
    margin-top: 45vh;
    animation-name: spin;
    animation-duration: 40s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @media screen and (max-width: 1024px) {
      margin-left: 70vw;
      margin-top: 35vh;
    }
    @media screen and (max-width: 768px) {
      transform: scale(0.5);
      margin-left: 50vw;
    }
  }
`;
