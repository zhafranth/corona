import React from "react";
import { Main, Item, Title, Image, TitleMain } from "./style";
import Slider from "react-slick";
import Carousel from "react-elastic-carousel";

// Images
import Image1 from "assets/images/gejala1.png";
import Image2 from "assets/images/gejala2.png";
import Image3 from "assets/images/gejala3.png";
import Image4 from "assets/images/gejala4.png";
import Image5 from "assets/images/gejala5.png";
import Image6 from "assets/images/gejala6.png";

const Symptoms = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <Main>
      <TitleMain>Symptoms</TitleMain>
      <Carousel
        itemsToScroll={1}
        itemsToShow={6}
        showArrows={false}
        dots={false}
      >
        <Item>
          <Image src={Image1} alt="Cought" className="img-cover" />
          <Title>Cought</Title>
        </Item>
        <Item>
          <Image src={Image2} alt="Fatige" className="img-cover" />
          <Title>Fatige</Title>
        </Item>
        <Item>
          <Image src={Image3} alt="Dificulty Breathing" className="img-cover" />
          <Title>Dificulty Breathing</Title>
        </Item>
        <Item>
          <Image src={Image4} alt="Sore Throat" className="img-cover" />
          <Title>Sore Throat</Title>
        </Item>
        <Item>
          <Image src={Image5} alt="Runny Nose" className="img-cover" />
          <Title>Runny Nose</Title>
        </Item>
        <Item>
          <Image src={Image6} alt="Headache" className="img-cover" />
          <Title>Headache</Title>
        </Item>
        <Item>
          <Image src={Image1} alt="Cought" className="img-cover" />
          <Title>Cought</Title>
        </Item>
      </Carousel>
    </Main>
  );
};

export default Symptoms;
