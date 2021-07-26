import { CAccordionSummary } from "./AccordianStyle";
import Typography from "@material-ui/core/Typography";
import { MdExpandMore } from "react-icons/md";
import Modal from "../Modal/Modal";
import { Accordion, AccordionDetails } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Column, Bold, Value } from "../../style/Dashboard";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: "bold",
    color: "#2196F3",
  },
  AccordionD: {
    display: "unset !important",
    padding: "0 !important",
  },
}));

const Heading = [
  "Demographics",
  "Insurance",
  "Vitals",
  "Medical Problems",
  "Allergies",
];

export default function NewAccordion() {
  const classes = useStyles();
  const [openHeading, setHeading] = useState("");

  function generateWeekAccordion() {
    return Heading.map((head) => (
      <Accordion
        className={classes.heading}
        expanded={head === openHeading}
        onClick={() => handleAccordClick(head)}
        key={head}
      >
        <CAccordionSummary
          className={classes.Accordion}
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {" "}
            {head}
            <span style={{ float: "right" }}>
              {" "}
              <Modal />
            </span>
          </Typography>
        </CAccordionSummary>
        <AccordionDetails className={classes.AccordionD}>
          {" "}
          <Container>
            <Column>
              <Bold>Name:</Bold> <Value>Phil Belford</Value>{" "}
            </Column>
            <Column>
              <Bold>Marital Status:</Bold> <Value>Single</Value>{" "}
            </Column>
            <Column>
              <Bold>Externam ID:</Bold> <Value>9034906</Value>{" "}
            </Column>
          </Container>
          <Container>
            <Column>
              <Bold>DOB:</Bold> <Value>1972-02-09</Value>{" "}
            </Column>
            <Column>
              <Bold>User Defind:</Bold> <Value>True</Value>{" "}
            </Column>
            <Column>
              <Bold>Sex:</Bold> <Value>Male</Value>{" "}
            </Column>
          </Container>
          <Container>
            <Column>
              <Bold>S.S</Bold> <Value>33333333333</Value>{" "}
            </Column>
            <Column>
              <Bold>Billing Note:</Bold> <Value>Medicaid</Value>{" "}
            </Column>
            <Column>
              <Bold>License ID:</Bold> <Value>8674729</Value>{" "}
            </Column>
          </Container>
        </AccordionDetails>
      </Accordion>
    ));
  }

  function handleAccordClick(head) {
    if (openHeading === head) setHeading("");
    if (openHeading !== head) setHeading(head);
  }

  return <div className="App">{generateWeekAccordion()}</div>;
}
