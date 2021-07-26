import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
box-sizing: border-box;
    margin: 10px;
    width: 90%;
    height: 50px;
    border: 1px solid #F2F2F2;
    border-radius: 10px;
    padding-top: 10px;
    display: flex;
    margin-left: 0;

`
export const CustomLink = styled(NavLink)`
&.TabActive{
    color:#2196F3;
    border-bottom: 4px solid #2196F3;

}
height: 100%;
min-width:150px;
text-align: center;
font-weight: 500;
border-bottom: ${props=>props.border?props.border:""};
cursor: pointer;
text-decoration:none;
color:grey;
&:hover{
    color:#2196F3;
    border-bottom: 4px solid #2196F3;
}
`