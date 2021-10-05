import React, { useState, useEffect } from "react";
import Axios from "axios";
import date from "date-and-time";
import { parse } from "date-format-parse";
import {
  MainHero,
  HeroContent,
  TitleContent,
  DescContent,
  HeroTracker,
  TitleTracker,
  DescTracker,
  WrapperTracker,
  WrapperVirus,
  BgHero,
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
import Virus1 from "assets/images/virus1.png";
import Virus2 from "assets/images/virus2.png";
import Virus3 from "assets/images/virus3.png";
import Virus4 from "assets/images/virus4.png";

const Hero = () => {
  const [indonesia, setIndonesia] = useState([]);
  const [active, setActive] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [lastUpdate, setLastUpdate] = useState("");
  const [death, setDeath] = useState([]);
  const now = new Date(lastUpdate);
  const tanggal = date.format(now, "ddd, MMM DD YYYY");
  console.log(now);

  useEffect(() => {
    Axios.get(
      "https://api.covid19api.com/live/country/indonesia/status/confirmed"
    )
      .then((res) => {
        const data = res.data;
        setIndonesia(data[data.length - 1].Confirmed);
        setActive(data[data.length - 1].Active);
        setRecovered(data[data.length - 1].Recovered);
        setDeath(data[data.length - 1].Deaths);
        setLastUpdate(data[data.length - 1].Date);
        console.log(data[data.length - 1]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <MainHero>
      <WrapperVirus>
        <Bounce delay={500} left speed="2000s">
          <div>
            <img src={Virus1} alt="virus" className="virus" id="virus1" />
          </div>
        </Bounce>
        <Bounce delay={800} left speed="2000s">
          <div>
            <img src={Virus2} alt="virus1" className="virus" id="virus2" />
          </div>
        </Bounce>
        <Bounce delay={1100} left speed="2000s">
          <div>
            <img src={Virus3} alt="virus2" className="virus" id="virus3" />
          </div>
        </Bounce>
        <Bounce delay={1400} left speed="2000s">
          <div>
            <img src={Virus4} alt="virus3" className="virus" id="virus4" />
          </div>
        </Bounce>
        <div className="square"></div>
      </WrapperVirus>
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
          Last Update: <span>{tanggal}</span>
        </DescTracker>
        <WrapperTracker>
          <Card
            cases={indonesia}
            title="Confirmed"
            icon={Icon1}
            bgColor="#FFD7DF"
            fontColor="#FD4B6E"
          />
          <Card
            cases={active}
            title="Active"
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
