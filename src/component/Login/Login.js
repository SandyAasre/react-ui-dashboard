import React,{useCallback} from "react";
import { Input } from "../../style/Input";
import { Label } from "../../style/Label";
import { LoginHeading, SecondHeading, Container,CustomLink } from "../../style/Login";
import { CustomDiv } from "../../style/shared";
import { Button } from "../../style/Button";
import {useHistory} from 'react-router-dom';
import {Logo1} from "../logo/Logo"; 


export const Login = () => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/home'), [history]);
  return (
    <> 
    <Logo1 />
    <Container marginTop="200px">
      <LoginHeading>Log In</LoginHeading>
      <SecondHeading>Not a member?<CustomLink to="/"> Sign up </CustomLink></SecondHeading>
      <CustomDiv marginT="50px">
        <Label display="block" margin="10px 0px 10px 0px">
          Username:{" "}
        </Label>
        <Input height="50px" width="350px" placeholder="Admin" required />
        <Label display="block" margin="10px 0px 10px 0px" display="inline" float="left">
          Password{" "}
        </Label> <CustomLink to="/" float="right">Forgot password?</CustomLink>
        <Input height="50px" width="350px" type="password" placeholder="****" required />
        <Button width="375px" marginTop="50px" onClick={handleOnClick}>Log In</Button>
      </CustomDiv>
    </Container>

    </>
  );
};
