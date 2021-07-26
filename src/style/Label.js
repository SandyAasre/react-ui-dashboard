import styled from "styled-components";

export const Label = styled.label`
color: ${props=>(props.color?props.color:"grey")};
font-size: 16px;
display: ${props=>(props.display?props.display:"")};
margin: ${(props) => (props.margin ? props.margin : "")};
float:${(props) => (props.float ? props.float : "")};
`