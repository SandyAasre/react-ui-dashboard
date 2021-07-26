import React from "react";
import { Container, CustomLink } from "../../style/Tab";
import Router from '../../Routes'
const Tab = () => {
  return (
    <Container>
      <CustomLink to="/Dashboard">Dashboard</CustomLink>
      <CustomLink to="/Consultation">Consultation</CustomLink>
      <CustomLink to="/Procedures">Procedures</CustomLink>
      <CustomLink to="/Diagnosis">Diagnosis</CustomLink>
      <CustomLink to="/Prescription">Prescription</CustomLink>
    </Container>
  );
};

export default Tab;
