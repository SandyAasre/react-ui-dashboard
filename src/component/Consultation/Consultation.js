import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NewConsultant from "./NewConsultation";
import styled from "styled-components";

const GirdContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 10px;
  height: 50px;
`;
const Paper = styled.div`
  width:100%;
  min-height:50px;
  margin-bottom: 10px;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 1px 1px 1px #f2f2f2;
  border-radius:15px;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  button: {
    backgroundColor: "#03b3fb",
    borderRadius: 20,
    display: "flex",
    boxShadow: "2px 2px 2px 2px #d9d9d9",
    float: "right",
    color: "white",
    fontWeight: "bold",
    fontFamily: "helvetica",
    textTransform: "none",
    width: 100,
    height: 30,
    fontSize: 15,
    margin: 4,
    "&:hover": {
      backgroundColor: "#0389fb",
    },
  },
}));

export default function Consultation() {
  const classes = useStyles();

  return (
    <div style={{ width: "90%" }}>
      <div className={classes.root}>
        <GirdContainer>
          <div>
            <Paper style={{ color: "#2196f3", fontWeight: "bold" }}>
              New Consultation
            </Paper>
            <Paper >Consultation history</Paper>
          </div>
          <div>
            <NewConsultant />
          </div>
        </GirdContainer>
      </div>
    </div>
  );
}

{
  /* <Grid item xs={3}>
                
                </Grid>
                <Grid item xs={9}>
                  
                </Grid>
                <Grid item xs={12}>
                  <Button className={classes.button}>Next</Button>
                </Grid> */
}
