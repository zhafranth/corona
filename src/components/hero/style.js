import styled, { keyframes } from "styled-components/macro";

const shimmer = keyframes`
  100% {
      transform: translateX(100%);
  }
`;
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
export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 45%;
  border-radius: 25px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 1.5rem;
`;
export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
`;
export const ImgWrapper = styled.div`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 16px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;
export const ImgCover = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
export const TitleCard = styled.h5`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #0d003a;
`;
export const WrapperCases = styled.div`
  display: flex;
  align-items: center;
`;
export const Cases = styled.h2`
  font-size: 52px;
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.fontColor};
`;
export const People = styled.p`
  margin: 0;
`;

export const BgHero = styled.img`
  position: absolute;
  top: 0;
  left: -40px;
  z-index: 1;
`;

export const BgVirus = styled.img`
  position: absolute;
  top: 1.5rem;
  left: 12vw;
  z-index: 2;
`;

export const BgCard = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

// ======== Loading
export const LoadCardPeople = styled.div`
  border-radius: 10px;
  position: relative;
  background-color: #f0f0f0;
  width: 70%;
  height: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      color-stop(rgba(255, 255, 255, 0.7)),
      to(transparent)
    );

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.7),
      transparent
    );

    /* Adding animation */
    animation: ${shimmer} 1s infinite;
  }
`;

export const LoadCardCases = styled.div`
  border-radius: 10px;
  position: relative;
  background-color: #f0f0f0;
  width: 70%;
  height: 50px;
  margin: 1rem 0;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      color-stop(rgba(255, 255, 255, 0.7)),
      to(transparent)
    );

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.7),
      transparent
    );

    /* Adding animation */
    animation: ${shimmer} 1s infinite;
  }
`;

export const LoadCardIcon = styled.div`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 16px;
  overflow: hidden;
  position: relative;
  background-color: #f0f0f0;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      color-stop(rgba(255, 255, 255, 0.7)),
      to(transparent)
    );

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.7),
      transparent
    );

    /* Adding animation */
    animation: ${shimmer} 1s infinite;
  }
`;

export const LoadCardTitle = styled.div`
  overflow: hidden;
  position: relative;
  width: 50%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 15px;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      color-stop(rgba(255, 255, 255, 0.7)),
      to(transparent)
    );

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.7),
      transparent
    );

    /* Adding animation */
    animation: ${shimmer} 1s infinite;
  }
`;
