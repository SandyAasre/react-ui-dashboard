import React from "react";
import {
  Container,
  Block,
  Icon,
  BlockText,
  Setting,
  Ad,
} from "../../style/Home";
import { RiHeartPulseLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { Logo1 } from "../logo/Logo";
import EhrLogin from "../EhrLogin/EhrLogin";
import HorizontalOne from "../../assets/Ads/Horizontal.jpeg";
export const OgilyHome = () => {

  return (
    <div>
      <Logo1 />
      <Setting>
        <div style={{ fontSize: "30px", color: "orangered" }}>Ogily</div>
        <FiSettings size="22px" color="#3A8BD8" style={{ marginTop: "10px" }} />
      </Setting>
      <Container>
        <Block>
          <Icon>
            <EhrLogin />
          </Icon>
          <BlockText color="#3A8BD8" top="210px" left="85px">
            EHR
          </BlockText>
          <BlockText color="grey" top="230px" left="80px">
            Demo
          </BlockText>
        </Block>

        <Block>
          <Icon>
            <RiHeartPulseLine size="150" />
          </Icon>
          <BlockText color="grey" top="210px" left="62px">
            Tele-health
          </BlockText>
          <BlockText color="grey" top="230px" left="80px">
            Demo
          </BlockText>
        </Block>
      </Container>
      <Ad>
        <img src={HorizontalOne} alt="HorizontalOne" />
      </Ad>
    </div>
  );
};
