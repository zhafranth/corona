import styled, { keyframes } from "styled-components/macro";

const shimmer = keyframes`
  100% {
      transform: translateX(100%);
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 45%;
  border-radius: 25px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 1.5rem;
  cursor: default;
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
  margin-right: 1rem;
  color: ${(props) => props.fontColor};
`;

export const People = styled.p`
  margin: 0;
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
