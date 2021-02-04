import React, { useState, useEffect } from "react";
import Axios from "axios";
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
  BgHero,
  BgCard,
  BgVirus,
  LoadCardTitle,
  LoadCardIcon,
  LoadCardCases,
  LoadCardPeople,
} from "./style";

// Reveal
import Bounce from "react-reveal/Bounce";

// Icons
import Icon1 from "assets/icons/icon1.svg";
import Icon2 from "assets/icons/icon2.svg";
import Icon3 from "assets/icons/icon3.svg";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

// Images
import ImgBgHero from "assets/images/bg-hero.png";
import ImgBgCard from "assets/images/bg-card.png";
import VirusBg from "assets/images/virusbg.png";

const Hero = () => {
  const [indonesia, setIndonesia] = useState([]);
  const [jakarta, setJakarta] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [death, setDeath] = useState([]);

  useEffect(() => {
    Axios.get("https://api.kawalcorona.com/indonesia")
      .then((res) => {
        setIndonesia(res.data[0].positif);
        setRecovered(res.data[0].sembuh);
        setDeath(res.data[0].meninggal);
      })
      .catch((err) => console.log(err));
    Axios.get("https://api.kawalcorona.com/indonesia/provinsi")
      .then((res) => {
        setJakarta(res.data[0].attributes.Kasus_Posi);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MainHero>
      <Bounce left delay={300} speed="2000s">
        <BgVirus src={VirusBg} />
      </Bounce>
      <BgHero src={ImgBgHero} />
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
            <BgCard src={ImgBgCard} />
            <WrapperTitle>
              {indonesia.length != 0 ? (
                <ImgWrapper color="#FFD7DF">
                  <ImgCover src={Icon1} />
                </ImgWrapper>
              ) : (
                <LoadCardIcon />
              )}
              {indonesia.length != 0 ? (
                <TitleCard>Total Cases</TitleCard>
              ) : (
                <LoadCardTitle />
              )}
            </WrapperTitle>
            {indonesia.length != 0 ? (
              <WrapperCases>
                <Cases fontColor="#FD4B6E">{indonesia}</Cases>
                <BsFillCaretUpFill />
              </WrapperCases>
            ) : (
              <LoadCardCases />
            )}
            {indonesia.length != 0 ? (
              <People>People</People>
            ) : (
              <LoadCardPeople />
            )}
          </Card>
          <Card>
            <BgCard src={ImgBgCard} />
            <WrapperTitle>
              <ImgWrapper color="#FFDDC7">
                <ImgCover src={Icon1} />
              </ImgWrapper>
              <TitleCard>Total Cases Jakarta</TitleCard>
            </WrapperTitle>
            <WrapperCases>
              <Cases fontColor="#FF6E0E">{jakarta}</Cases>
              <BsFillCaretUpFill />
            </WrapperCases>
            <People>People</People>
          </Card>
          <Card>
            <BgCard src={ImgBgCard} />
            <WrapperTitle>
              <ImgWrapper color="#EBFFD8">
                <ImgCover src={Icon2} />
              </ImgWrapper>
              <TitleCard>Recovered</TitleCard>
            </WrapperTitle>
            <WrapperCases>
              <Cases fontColor="#7BD821">{recovered}</Cases>
              <BsFillCaretUpFill />
            </WrapperCases>
            <People>People</People>
          </Card>
          <Card>
            <BgCard src={ImgBgCard} />
            <WrapperTitle>
              <ImgWrapper color="#E8E1FF">
                <ImgCover src={Icon3} />
              </ImgWrapper>
              <TitleCard>Death</TitleCard>
            </WrapperTitle>
            <WrapperCases>
              <Cases fontColor="#9B7DFF">{death}</Cases>
              <BsFillCaretUpFill />
            </WrapperCases>
            <People>People</People>
          </Card>
        </WrapperTracker>
      </HeroTracker>
    </MainHero>
  );
};

export default Hero;
