import React from 'react'
import { Cointainer,CustomNavLink,CPersonIcon,CPersonOutlineIcon, CHiOutlineDotsCircleHorizontal, CBiCalendar } from '../../style/Sidebar'
import {CustomDiv} from '../../style/shared'

import './sidebar.css';
export const Sidebar = () => {
    return (
        <Cointainer>
            <CustomDiv marginT="150px">
                <CustomNavLink  to="/Calender"> 
                    <CBiCalendar size="30px" />
                </CustomNavLink>
                <CustomNavLink  to="/People/dashboard">
                    <CPersonIcon  width="30px" height="30px" />
                </CustomNavLink>
                <CustomNavLink  to="/" exact>
                    <CHiOutlineDotsCircleHorizontal size="30px" />
                </CustomNavLink>
                <CustomNavLink  to="/" exact>
                    <CPersonOutlineIcon width="30px" height="30px" />
                </CustomNavLink>
            </CustomDiv>
        </Cointainer>
    )
}

//el idea