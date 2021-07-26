import React from "react";
import Accordion from "../Accordion/Accordion";
import { CustomDiv } from "../../style/shared";

import Advertise from "../../assets/Ads/vertical2.jpeg";

export const Dashboard = () => {
  return (
    <div style={{width:"90%"}}>
      
          <Accordion />
          <CustomDiv display="flex" justifyContent="center" marginT="70px">
            <img src={Advertise} alt="advertisment" />
          </CustomDiv> 
    </div>
  );
};
