import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Grid } from "../../style/Dashboard";
import { Navbar } from "../Navbar/Navbar";
import {
  Scheduler,
  Appointments,
  WeekView,
} from "@devexpress/dx-react-scheduler-material-ui";
import appointments from "../../data/today";
import { CalenderConatainer, CustomCalender,CustomPaper } from "../../style/Calender";
import "react-calendar/dist/Calendar.css";
import { Provider } from "./Provider";
import AdHorizontal from '../../assets/Ads/Horizontal2.jpeg' 
import AdVertical from '../../assets/Ads/vertical.jpeg' 
import { CustomDiv } from "../../style/shared";
import { Logo2 } from "../logo/Logo";
export const Calender = () => {
  const [value, onChange] = React.useState(new Date());
  return (
    <>
      <Grid>
        <div>
        <Logo2 />
          <Sidebar />
        </div>
        <div style={{ width: "99%" }}>
          <Navbar Heading="Calender"/>
          <CustomDiv display="flex" justifyContent="center">
            <img src={AdVertical} alt="AdVertical"/>
          </CustomDiv>
          <CalenderConatainer>
            <div>
              <CustomCalender onChange={onChange} value={value} /> <Provider />
            </div>
            <div>
              <CustomPaper>
                <Scheduler data={appointments} height={660}>
                  <WeekView startDayHour={9} endDayHour={19} />
                  <Appointments />
                </Scheduler>
              </CustomPaper>
            </div>
            <div>
              <img src={AdHorizontal} alt="AdHorizontal" style={{marginTop:"20px"}}/>
            </div>
          </CalenderConatainer>
        </div>
      </Grid>
    </>
  );
};
