import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Scrollbars } from "react-custom-scrollbars";
import Blood from "./Blood";
import BloodTests from "./BloodTest";
import { Grid as G, CustomLink } from "../../style/Dashboard";
import HorizontalOne from "../../assets/Ads/Horizontal2.jpeg";
import styled from "styled-components";
const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 65% 10%;
  grid-gap: 10px;
  height: 50px;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "&::-webkit-scrollbar": {
      width: 1,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgrey",
      outline: `1px solid slategrey`,
    },
  },
  paper: {
    border: "0.5px solid #e6e6e6",
    padding: theme.spacing(2),
    textAlign: "center",
    color: "grey",
    fontWeight: "500",
    maxHeight: 500,
  },
  panel: {
    border: "0.5px solid #e6e6e6",
    width: "100%",
    paddingTop: 20,
    paddingLeft: 40,
    padding: 10,
    height: 450,
    fontWeight: "500",
    color: "grey",
  },
  Label: {
    marginTop: 40,
    fontSize: 12,
    color: "gray",
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
    "&:hover": {
      backgroundColor: "#0389fb",
      borderRadius: "20px",
    },
  },
}));
export default function Procedures() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Container>
        <div>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                style={{
                  color: "#2196f3",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                Laboratory
              </Typography>
              <List
                component="nav"
                aria-label="secondary mailbox folder">
                <Scrollbars style={{ width: "100%", height: 450 }}>
                  <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemText classes={classes.Dropdown} primary="Blood" />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <ListItemText primary="Urine" />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <ListItemText primary="Serum" />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <ListItemText primary="Stool" />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                  >
                    <ListItemText primary="Monotox" />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                  >
                    <ListItemText primary="Pleural" />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 7}
                    onClick={(event) => handleListItemClick(event, 7)}
                  >
                    <ListItemText primary="CSF" />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 8}
                    onClick={(event) => handleListItemClick(event, 8)}
                  >
                    <ListItemText primary="Tissue" />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 9}
                    onClick={(event) => handleListItemClick(event, 9)}
                  >
                    <ListItemText primary="Scrap" />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 10}
                    onClick={(event) => handleListItemClick(event, 10)}
                  >
                    <ListItemText primary="Asitic Fluid" />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 11}
                    onClick={(event) => handleListItemClick(event, 11)}
                  >
                    <ListItemText primary="Bronchoscopy Lavage" />
                  </ListItem>
                </Scrollbars>
              </List>
            </Paper>
          </Grid>
        </div>
        <div>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper className={classes.panel}>
                  <Typography style={{ color: "#2196f3", fontWeight: 600 }}>
                    Panels
                  </Typography>
                  <Blood />
                  <Grid item xs={12}>
                    <Typography style={{ color: "#2196f3", fontWeight: 600 }}>
                      Tests
                    </Typography>
                    <BloodTests />
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CustomLink to="/">Next</CustomLink>
          </Grid>
        </div>
        <div>
          <img src={HorizontalOne} alt="HorizontalOne" />
        </div>
      </Container>

    </>
  );
}
