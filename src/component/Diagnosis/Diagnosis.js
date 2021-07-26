import React from "react";
import { Container, Heading, Refresh, Table } from "../../style/Diagnosis";
import { GrRefresh } from "react-icons/gr";
import { IoIosAlert } from "react-icons/io";
import {  CustomLink } from "../../style/Dashboard";
import Modal from "../Modal/Modal";
import SimpleModal from "../Modal/DiagnosisModal";
import ADImage from "../../assets/Ads/vertical4.jpeg";
import { CustomDiv } from "../../style/shared";

export const Diagnosis = () => {
  return (
    <div style={{width:"90%"}}>
      <Container>
        <div>
          <Heading>
            Medical Problem <SimpleModal />
          </Heading>
          <Refresh>
            <GrRefresh color="#2196F3" /> Reset Portal Credentials
          </Refresh>
        </div>

        <Table>
          <tr>
            <th>Title</th>
            <th>Coding (click for education)</th>
            <th>Status</th>
            <th>Occurrence</th>
            <th>Verification Status</th>
            <th>Referred By</th>
            <th>Date</th>
            <th>Comments</th>
            <th>Edit</th>
          </tr>
          <tr>
            <td>HTN</td>
            <td>ICD9:401.0 ()</td>
            <td>Active</td>
            <td>Unknown or N/A</td>
            <td>
              <IoIosAlert />
            </td>
            <td>Referred By</td>
            <td>2021-05-16</td>
            <td></td>
            <td>
              <Modal />
            </td>
          </tr>
        </Table>
      </Container>
      <CustomLink to="/">Next</CustomLink>
      <CustomDiv display="flex" justifyContent="center" marginT="70px">
        <img src={ADImage} alt="ADImage" />
      </CustomDiv>
     
    </div>
  );
};
