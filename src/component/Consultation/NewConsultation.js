import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/InputBase";
import Label from "@material-ui/core/FormLabel";
import { Typography } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AddIcon from '@material-ui/icons/Add';
import styled from "styled-components";

const Container = styled.div`
  width:100%;
  border-radius:5px;
  box-shadow:0px 1px 1px 1px #f2f2f2;
`
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  New: {
    color: "#2196f3",
    fontWeight:"bold",
    padding: 20,
    display: "flex",
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 15,
    fontFamily: "Helvetica",
    color: "gray",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
  },
  input1: {
    marginTop: 15,
    height: 25,
    width: 150,
    borderRadius: 3,
    display: "flex",
    justifyItems: "flex-start",
    border: "1px solid #e6e6e6",
    "& input::placeholder": {
      fontSize: 10,
      display: "flex",
      fontWeight: "bold",
      color: "black",
      paddingLeft: 15,
    },
  },
  button: {
    marginTop: 15,
    display: "flex",
    backgroundColor: "lightgray",
    fontSize: 12,   
    textTransform:"none",
    height: 25,
    width: 100,
  },
  select: {
    marginTop: 15,
    marginLeft: 80,
    height: 25,
    width: 150,
    borderRadius: 3,
    display: "flex",
    justifyItems: "flex-start",
    border: "none",
    backgroundColor:"none !important"
    // "&:focus"{

    // }
  },
  Textarea:{
    minHeight:70,
    width:610,
    marginLeft:5,
    border:" 1px solid #e6e6e6",
    borderRadius:5,
  },
  Textarea1:{
    width:610,
    minHeight:20,
    marginLeft:5,
    marginTop:18,
    border:" 1px solid #e6e6e6",
    borderRadius:5,
  },
  input2:{
    height: 25,
    marginLeft:5,
    width: 618,
    borderRadius: 3,
    display: "flex",
    justifyItems: "flex-start",
    border: "1px solid #e6e6e6",
    "& input::placeholder": {
      fontSize: 10,
      display: "flex",
      fontWeight: "bold",
      color: "black",
      paddingLeft: 12,
    },
  },
  button2:{
    backgroundColor:"lightgray",
    borderRadius:20,
    width:100,  
    textTransform:"none",
    height:30,
    fontSize:12,
    margin:4,
    '&:hover': {
      backgroundColor: "#03b3fb",
      color: 'white',
    }
  }

}));

export default function NewConsultant() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
   
          <Container>
            <Grid item xs={12}>
              <Typography className={classes.New} >New Consultation</Typography>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <Label className={classes.label}>Chief Complaint</Label>
              </Grid>
              <Grid item xs={2}>
                <Input
                  className={classes.input1}
                  placeholder="Shortness of breath"
                />
              </Grid>
              <Grid item xs={2}>
                <Button className={classes.button}>Accept</Button>
              </Grid>
              <Grid
                item
                xs={1}
                style={{ marginLeft: -70, marginRight: -30, marginTop: 2 }}
              >
                <Label className={classes.label} style={{ fontSize: 13 }}>
                  for
                </Label>
              </Grid>
              <Grid item xs={1}>
                <Input className={classes.input1} />
              </Grid>
              <Grid item xs={1}>
                <FormControl variant="outlined">
                  <Select className={classes.select}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2} >
                  <span style={{
                    display:"flex",
                    margin:16,
                    marginLeft:150,
                    color:"blue"
                  }}>
                  <AddIcon/>
                    </span>
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{marginTop:-28}}>
              <Grid item xs={3}>
                <Label className={classes.label}>Notes</Label>
              </Grid>
              <Grid item xs={8}>
              <TextareaAutosize className={classes.Textarea} />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{marginTop:-28}}>
              <Grid item xs={3}>
                <Label className={classes.label}>History Notes</Label>
              </Grid>
              <Grid item xs={8}>
              <TextareaAutosize className={classes.Textarea1}
              /* placeholder="With confirmed hypertension for last 7 yrs. Family history of sudden cardiac death." */
              />
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{marginTop:-18}}>
              <Grid item xs={3}style={{marginTop:-15}}>
                <Label className={classes.label}>Examination Notes</Label>
              </Grid>
              <Grid item xs={8}>
                <Input
                  className={classes.input2}/* 
                  placeholder="Increased propensity to blood coagulation. Check for ACS." */
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{marginTop:-20}}>
              <Grid item xs={3} style={{marginTop:-10}}>
                <Label className={classes.label}>Smoking History</Label>
              </Grid>
              <Grid item xs={8}>
                <Button className={classes.button2}>Yes</Button>
                <Button className={classes.button2}>No</Button>
              </Grid>
            </Grid>
          </Container>
       
    </div>
  );
}
