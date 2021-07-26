import {
  Container,
  CardContainer,
  CMdExpandMore,
  CardTitle,
  MedicalCard,
  MedicalSearch,
  MedicalTab,
  Table,
} from "../../style/Prescription";
import { CustomDiv } from "../../style/shared";
import { Input } from "../../style/Input";
import { Button } from "../../style/Button";
import { FaRegEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Advertise from "../../assets/Ads/Horizontal2.jpeg";
import { Billing } from "../Billing/Billing";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Medication from './Medication'
const Card = (props) => {
  return (
    <CardContainer>
      <CardTitle>{props.name}</CardTitle>
      <CMdExpandMore size="25px" />
    </CardContainer>
  );
};

const MedicationCard = (props) => {
  return (
    <MedicalCard>
      <div>
        <CustomDiv padding="10px" color="#2196F3" fontWeight="500">
          Medical Search
        </CustomDiv>

        <MedicalSearch>
          <Input
            fontSizeP="12px"
            height="38px"
            width="65%"
            display="inline"
            placeholder="Enter a drug name with at least 3 characters"
            paddi
          />
          <CustomDiv marginT="3px">
            <Button
              height="fit-content"
              padding="5px 20px"
              borderRadius="20px"
              color="black"
              backgroundColor="grey"
              fontSize="14px"
              backgroundImage="none"
              marginL="5px"
            >
              Search
            </Button>
            <Button
              height="fit-content"
              padding="5px 20px"
              borderRadius="20px"
              color="black"
              backgroundColor="grey"
              fontSize="14px"
              backgroundImage="none"
              marginL="5px"
              onClick={() => {
                <Billing />;
              }}
            >
              Prescriber’s List
            </Button>
          </CustomDiv>
        </MedicalSearch>
      </div>
      <MedicalTab>Pending Medication</MedicalTab>
      <Table>
        <tr>
          <th>Date Created</th>
          <th>Medication</th>
          <th>Amount</th>
          <th>Refills</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
        <tr>
          <td>5/18/2020</td>
          <td style={{ maxWidth: "130px", padding: "4px", color: "#2196F3" }}>
            Brilinta 90 MG Oral Tablet
          </td>
          <td>30 (Caplet)</td>
          <td>0</td>
          <td>Pending</td>
          <td>
            <FaRegEdit color="#2196F3" />
          </td>
          <td>
            <ImCross />
          </td>
        </tr>
        <tr>
          <td></td>
          <td style={{ maxWidth: "130px", padding: "4px" }}>
            <b>Sig:</b> take 2 tablet orally daily <br />
            <b>Pharm Note:</b> Provider requests for you to Dispense as written
            (DAW) for Brilinta® (Ticagrelor). Brand medically necessary. <br />
            QUES: 800-422-4523
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </Table>
    </MedicalCard>
  );
};

export const Prescription = () => {
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push("/People/billing"),
    [history]
  );
  return (
    <>
      <Container>
        <div>
          <Card name="New Medication" /> <Card name="Medication history" />{" "}
        </div>
        <div>
          <MedicationCard />
          <CustomDiv display="flex" justifyContent="flex-end" marginT="20px">
            <Button
              padding="10px 25px"
              borderRadius="20px"
              float="right"
              marginT="20px !important"
              onClick={handleOnClick}
            >
              Next
            </Button>
          </CustomDiv>
          <CustomDiv float="right"
            marginT="20px"
            display="block">
            <Button height="fit-content" padding="0px 0px" borderRadius="20px">
              <Medication />
            </Button>
            <Button
              height="fit-content"
              padding="5px 20px"
              borderRadius="20px"
              color="black"
              backgroundImage="none"
              backgroundColor="#f2f2f2"
            >
              {" "}
              Close
            </Button>
          </CustomDiv>
        </div>
        <CustomDiv >
          <img src={Advertise} alt="Advertise" />
        </CustomDiv>
      </Container>
    </>
  );
};
