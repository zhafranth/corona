import React from "react";
import {
  Card,
  BgCard,
  WrapperTitle,
  ImgWrapper,
  ImgCover,
  TitleCard,
  WrapperCases,
  Cases,
  People,
  LoadCardIcon,
  LoadCardTitle,
  LoadCardCases,
  LoadCardPeople,
} from "./style";

import ImgBgCard from "assets/images/bg-card.png";

import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const Index = ({ cases, icon, title, bgColor, fontColor }) => {
  return (
    <Card>
      <BgCard src={ImgBgCard} />
      <WrapperTitle>
        {cases.length != 0 ? (
          <ImgWrapper color={bgColor}>
            <ImgCover src={icon} />
          </ImgWrapper>
        ) : (
          <LoadCardIcon />
        )}
        {cases.length != 0 ? <TitleCard>{title}</TitleCard> : <LoadCardTitle />}
      </WrapperTitle>
      {cases.length != 0 ? (
        <WrapperCases>
          <Cases fontColor={fontColor}>{cases}</Cases>
          <BsFillCaretUpFill style={{ width: "30px", height: "30px" }} />
        </WrapperCases>
      ) : (
        <LoadCardCases />
      )}
      {cases.length != 0 ? <People>People</People> : <LoadCardPeople />}
    </Card>
  );
};

export default Index;
