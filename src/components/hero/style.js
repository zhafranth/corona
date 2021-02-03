import styled from "styled-components/macro";

export const MainHero = styled.div`
  position: relative;
  padding: 4rem 12vw;
  /* height: 88vh; */
  display: flex;
  background-color: #f4f9ff;
  box-sizing: border-box;
  justify-content: space-between;
`;
export const HeroContent = styled.div`
  width: 30%;
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
  background-color: ${(props) => props.color};
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
export const WrapperCases = styled.div``;
export const Cases = styled.h2`
  font-size: 52px;
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.fontColor};
`;
export const People = styled.p``;

export const Wave = styled.svg`
  position: absolute;
  bottom: -240px;
  left: 0;
  right: 0;
  z-index: -1;
  path {
    fill: #f4f9ff;
  }
`;
