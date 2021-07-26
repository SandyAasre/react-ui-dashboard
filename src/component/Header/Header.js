import React from "react";
import { Container, Image,H3 } from "../../style/Header";
import Photo from '../../assets/demo.png';
import { CustomDiv } from "../../style/shared";
import Advertise from "../../assets/Ads/vertical.jpeg";

export const Header = () => {
  return (
    <Container>
      <Image src={Photo} alt="photo" />
      <div>
        <H3>Patient : <span>Phil Belford</span> </H3>
        <H3>DOB : 1972-02-09 Age : 49</H3>
      </div>
    <CustomDiv >
      <img src={Advertise} alt="Advertise" width="600px" height="100px" />
    </CustomDiv>
    </Container>
  );
};
