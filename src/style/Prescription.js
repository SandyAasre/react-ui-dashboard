import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
export const Container = styled.div`
    min-height:300px;
    height: auto;
    display: grid;
    grid-template-columns: 20% 70% 10%;
    grid-gap: 10px;
    width:98%
`
export const CardContainer = styled.div`
 border:2px solid #f2f2f2;
 border-radius: 10px;
 width:100%;
 min-height: 55px;
 height: auto;
 text-align: center;
 font-weight: 500;
 margin-bottom:  10px;
`
export const CMdExpandMore = styled(MdExpandMore)`
    margin: 10px;
    margin: 15px 10px 10px 10px;

`
export const CardTitle = styled.div`
float: left;
margin: 15px 10px 10px 25px;
` 

export const MedicalCard = styled.div`
border:1px solid #f2f2f2;
width: 100%;
min-height: 300px;
height: auto;
margin: auto;
border-radius:10px;
padding:10px
`
export const MedicalSearch = styled.div`
 display: flex;
 flex-wrap: wrap;
 padding:10px 0px 10px 10px;
`
export const MedicalTab = styled.div`
display: flex;
align-items: center;
background-color: #2196F3;
height: 35px;
width: 100%;
color: white;
font-weight: 500;
padding-left: 10px;
`
export const Table = styled.table`
    font-size: 14px;
    width: 100%;
    th{
        font-weight: 500;
        text-align: start;
        padding: 10px 0px;
    }
    td{
        text-align: start;
        padding: 10px 0px;
        color:grey;
    }
`