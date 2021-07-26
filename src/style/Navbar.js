
import styled from "styled-components";
import {BsSearch} from 'react-icons/bs'
export const Container = styled.div`
    display: flex;
    flex-shrink:1;

`

export const Heading = styled.div`
font-size: 2vw;
font-weight: 600;
color:grey;
cursor:pointer;
margin:10px 10px 10px 0px;
`
export const Seachbar = styled.div`
position: relative;
width: 850px;
flex-shrink: 1;
flex-grow: 1;
background-color: white;
height: 50px;
cursor:pointer;
border: 1px solid grey;
border-radius: 10px;
flex-shrink: 1;
margin:10px 10px 10px 10px;
&:focus{
    border-color: black;
}
`

export const Input = styled.input`
    width: 80%;
    height:40px;
    border:none;
    outline: none;
    cursor:pointer;
    position: absolute;
    font-size: 16px;
    left:50px;
    top:4px;
`
export const CustomBsSearch = styled(BsSearch)`
position: absolute;
top:12px;
left:15px
` 