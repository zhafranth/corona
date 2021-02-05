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
  // Card,
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

// Components
import Card from "../cardCases/Index";

// Reveal
import Bounce from "react-reveal/Bounce";

// Icons
import Icon1 from "assets/icons/icon1.svg";
import Icon2 from "assets/icons/icon2.svg";
import Icon3 from "assets/icons/icon3.svg";

// Images
import ImgBgHero from "assets/images/bg-hero.png";
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
          <Card
            cases={indonesia}
            title="Total Cases"
            icon={Icon1}
            bgColor="#FFD7DF"
            fontColor="#FD4B6E"
          />
          <Card
            cases={jakarta}
            title="Total Cases Jakarta"
            icon={Icon1}
            bgColor="#FFDDC7"
            fontColor="#FF6E0E"
          />
          <Card
            cases={recovered}
            title="Recovered"
            icon={Icon2}
            bgColor="#EBFFD8"
            fontColor="#7BD821"
          />
          <Card
            cases={death}
            title="Death"
            icon={Icon3}
            bgColor="#E8E1FF"
            fontColor="#9B7DFF"
          />
        </WrapperTracker>
      </HeroTracker>
    </MainHero>
  );
};

export default Hero;
