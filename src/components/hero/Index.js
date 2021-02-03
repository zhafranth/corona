import React from "react";
import {
  MainHero,
  HeroContent,
  TitleContent,
  DescContent,
  HeroTracker,
  TitleTracker,
  DescTracker,
  WrapperTracker,
  Card,
  WrapperTitle,
  ImgWrapper,
  ImgCover,
  TitleCard,
  WrapperCases,
  Cases,
  People,
  Wave,
} from "./style";

// Icons
import Icon1 from "assets/icons/icon1.svg";
import Icon2 from "assets/icons/icon2.svg";
import Icon3 from "assets/icons/icon3.svg";

const Hero = () => {
  return (
    <MainHero>
      {/* <Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path d="M0,224L60,234.7C120,245,240,267,360,256C480,245,600,203,720,160C840,117,960,75,1080,74.7C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </Wave> */}
      <HeroContent>
        <TitleContent>Stay Home Stay Safe</TitleContent>
        <DescContent>
          Keep Yourseft Home <br /> Quarantined
        </DescContent>
      </HeroContent>
      <HeroTracker>
        <TitleTracker>
          Covid-19 <span>Indonesia Trend</span>
        </TitleTracker>
        <DescTracker>
          Last Update: <span>01 Februari 2021</span>
        </DescTracker>
        <WrapperTracker>
          <Card>
            <WrapperTitle>
              <ImgWrapper color="#FFD7DF">
                <ImgCover src={Icon1} />
              </ImgWrapper>
              <TitleCard>Total Cases</TitleCard>
            </WrapperTitle>
            <WrapperCases>
              <Cases fontColor="#FD4B6E">1,231,223</Cases>
            </WrapperCases>
            <People>People</People>
          </Card>
          <Card>
            <WrapperTitle>
              <ImgWrapper color="#FFDDC7">
                <ImgCover src={Icon1} />
              </ImgWrapper>
              <TitleCard>Total Cases</TitleCard>
            </WrapperTitle>
            <WrapperCases>
              <Cases fontColor="#FF6E0E">1,231,223</Cases>
            </WrapperCases>
            <People>People</People>
          </Card>
          <Card>
            <WrapperTitle>
              <ImgWrapper color="#EBFFD8">
                <ImgCover src={Icon2} />
              </ImgWrapper>
              <TitleCard>Total Cases</TitleCard>
            </WrapperTitle>
            <WrapperCases>
              <Cases fontColor="#7BD821">1,231,223</Cases>
            </WrapperCases>
            <People>People</People>
          </Card>
          <Card>
            <WrapperTitle>
              <ImgWrapper color="#E8E1FF">
                <ImgCover src={Icon3} />
              </ImgWrapper>
              <TitleCard>Total Cases</TitleCard>
            </WrapperTitle>
            <WrapperCases>
              <Cases fontColor="#9B7DFF">1,231,223</Cases>
            </WrapperCases>
            <People>People</People>
          </Card>
        </WrapperTracker>
      </HeroTracker>
    </MainHero>
  );
};

export default Hero;
