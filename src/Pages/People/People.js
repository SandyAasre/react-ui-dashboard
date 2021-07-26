import React from "react";
import { Sidebar } from "../../component/Sidebar/Sidebar";
import { Grid } from "../../style/Dashboard";
import { Header } from "../../component/Header/Header";
import { Navbar } from "../../component/Navbar/Navbar";
import { Container, CustomLink } from "../../style/Tab";
import { Logo2 } from "../../component/logo/Logo";
import Router from '../../Routes'
export default function People() {

  return (
    <Grid>
      <div>
        <Logo2 />
        <Sidebar />
      </div>
      <div style={{ width: "100%" }}>
        <Navbar />
        <Header />
        <Container>
          <CustomLink activeClassName="TabActive" to="/People/dashboard" >Dashboard</CustomLink>
          <CustomLink activeClassName="TabActive" to="/People/Consultation" >Consultation</CustomLink>
          <CustomLink activeClassName="TabActive" to="/People/Procedures" >Procedures</CustomLink>
          <CustomLink activeClassName="TabActive" to="/People/Diagnosis" >Diagnosis</CustomLink>
          <CustomLink activeClassName="TabActive" to="/People/Prescription" >Prescription</CustomLink>
        </Container>
        <div>
          <Router/>
        </div>
      </div>
    </Grid>
  );
}
