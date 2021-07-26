import styled from "styled-components";
import Calendar from 'react-calendar';
import Paper from "@material-ui/core/Paper";
export const CalenderConatainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 20% 70% 10%;
    column-gap: 5px;
` 
export const CustomCalender = styled(Calendar)`
    outline: none !important;
    border:none !important;
    box-shadow: 0px 1px 1px 1px #f2f2f2;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    height: fit-content;
`

export const CustomPaper = styled(Paper)`
    margin-top: 10px;
`