import React from "react";
import { Image, Image1 } from "../../style/Logo";
import FirstLogo from "../../assets/logo2.jpeg";
import SecondLogo from "../../assets/logo.jpeg";
import ThirdLogo from "../../assets/logo3.jpeg";

export const Logo1 = () => {
  return (
    <div>
      <Image src={FirstLogo} alt="logo" />
    </div>
  );
};

export const Logo2 = () => {
  return (
    <div>
      <Image1 src={SecondLogo} alt="logo" />
    </div>
  );
};

export const Logo3 = () => {
  return (
    <div>
      <Image src={ThirdLogo} alt="logo" />
    </div>
  );
};
