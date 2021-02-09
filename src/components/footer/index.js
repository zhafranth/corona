import React from "react";
import Heart from "assets/images/heart.png";

import { Main, Title, Link } from "./style";

const Footer = () => {
  return (
    <Main>
      <Title>
        Made with <img src={Heart} alt="heart" style={{ margin: "0 0.5rem" }} />{" "}
        from{"  "}
        <Link
          href="https://www.instagram.com/zhafranth/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Zhafran
        </Link>
      </Title>
    </Main>
  );
};

export default Footer;
