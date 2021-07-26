import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
export const Cointainer = styled.div`
  width: 80px;
  background-color: #2196f3;
  margin-top: 100px;
  height: 100vh;
  border-radius: 0px 40px 0px 0px;
  position: fixed;
`;

export const CustomNavLink = styled(NavLink)`
  margin-left: 10px;
  padding: 15px;
  display: block;
  .active {
    border-radius: 50px 0px 0px 50px;
    background-color: white;
  }
`;

export const CPersonIcon = styled(PersonIcon)`
  color:white;
  &:hover{
    color:grey;
  }
`
export const CPersonOutlineIcon = styled(PersonOutlineIcon)`
  color:white;
  &:hover{
    color:grey;
  }
`
export const CHiOutlineDotsCircleHorizontal = styled(HiOutlineDotsCircleHorizontal)`
  color:white;
  &:hover{
    color:grey;
  }
`
export const CBiCalendar = styled(CalendarTodayRoundedIcon)`
  color:white;
  &:hover{
    color:grey;
  }
`