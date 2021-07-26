import React, {useCallback} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Divider from "@material-ui/core/Divider";
import { Input } from "../../style/Input";
import { Label } from "../../style/Label";
import { LoginHeading, SecondHeading, Container } from "../../style/Login";
import { CustomDiv } from "../../style/shared";
import { Button } from "../../style/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";

import {useHistory} from 'react-router-dom';
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    padding: "50px 20px 70px 50px",
    outline:"none"
  },
}));

const EhrLogin = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/Calender'), [history]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <LoginHeading>EHR Log In</LoginHeading>
      <CustomDiv marginT="50px">
        <Label display="block" margin="10px 0px 10px 0px">
          Username:{" "}
        </Label>
        <Input height="50px" width="350px" placeholder="Admin" />
        <Label display="block" margin="10px 0px 10px 0px">
          Password{" "}
        </Label>
        <Input height="50px" width="350px" placeholder="****" />
        <Button width="355px" marginTop="50px" onClick={handleOnClick}>
          Log In
        </Button>
      </CustomDiv>
    </div>
  );

  return (
    <div>
      <AiOutlinePlusCircle size="150"  onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default EhrLogin;
