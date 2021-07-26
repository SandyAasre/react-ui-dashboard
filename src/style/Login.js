import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled("div")`
  width: 350px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width:400px){
    width:80%
  }
`;
export const LoginHeading = styled("div")`
  color: black;
  font-size: 35px;
  font-weight: 700;
`;

export const SecondHeading = styled("div")`
  color: grey;
  font-size: 18px;
  font-weight: 600;
`;

export const CustomLink= styled(Link)`
  color:#2196f3;
  text-decoration:none;
  font-size:16px;
float:${(props) => (props.float ? props.float : "")};

`