import React, {useCallback} from "react";
import {useHistory} from 'react-router-dom';
import { Container, Block, Icon,BlockText,Upload } from "../../style/Home";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiHeartPulseLine } from "react-icons/ri";
import {BiUpload} from 'react-icons/bi'
import { Logo1 } from "../logo/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon:{
    cursor:"pointer",
  }
}));

export const Home = () => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/ogily-home'), [history]);
  const classes = useStyles();
 
  return (
    <div>
      <Logo1 />
      <Upload className={classes.icon}>
        <BiUpload size="22px" color="#3A8BD8"/>
        <div>Upload logo</div>
      </Upload>
      <Container>
        <Block onClick={handleOnClick}>
          <Icon>
            <AiOutlinePlusCircle className={classes.icon} size="150" />
          </Icon>
          <BlockText  color="#3A8BD8"top="210px" left="85px">EHR</BlockText>
          <BlockText color="grey" top="230px" left="80px">Demo</BlockText>
        </Block>
          
        <Block>
          <Icon>
            <RiHeartPulseLine className={classes.icon} size="150" />
          </Icon>
          <BlockText color="grey" top="210px" left="62px">Tele-health</BlockText>
          <BlockText color="grey" top="230px" left="80px">Demo</BlockText>
        </Block>
          
      </Container>
    </div>
  );
};
