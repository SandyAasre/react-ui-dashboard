import styled from "styled-components"

export const CustomDiv = styled.div`
color: ${props =>(props.color ? props.color:"")};
width: ${props =>(props.width ? props.width:"")};
height: ${props =>(props.height ? props.height:"")};
margin-top: ${props =>(props.marginT ? props.marginT:"")};
margin-left: ${props =>(props.marginL ? props.marginL:"")};
margin-right: ${props =>(props.marginR ? props.marginR:"")};
margin-bottom: ${props =>(props.marginB ? props.marginB:"")};
margin: ${props =>(props.margin ? props.margin:"")};
padding: ${props =>(props.padding ? props.padding:"")};
top: ${props =>(props.top ? props.top:"")};
left: ${props =>(props.left ? props.left:"")};
right: ${props =>(props.right ? props.right:"")};
bottom: ${props =>(props.bottom ? props.bottom:"")};
position: ${props =>(props.position ? props.position:"")};
background-color: ${props =>(props.colorB ? props.colorB:"")};
background: ${props =>(props.background ? props.background:"")};
border: ${props =>(props.border ? props.border:"")};
display: ${props =>(props.display ? props.display:"")};
border-bottom: ${props =>(props.borderBottom ? props.borderBottom:"")};
flex-grow: ${props =>(props.flexGrow ? props.flexGrow:"")};
border-top-right-radius: ${props =>(props.borderTopRightRadius ? props.borderTopRightRadius:"")};
border-top-left-radius: ${props =>(props.borderTopLeftRadius ? props.borderTopLeftRadius:"")};
border-radius: ${props =>(props.borderRadius ? props.borderRadius:"")};
font-family: ${props =>(props.borderRadius ? props.borderRadius:"")};
font-size: ${props =>(props.fontSize ? props.fontSize:"")};
font-style: ${props =>(props.fontStyle ? props.fontStyle:"")};
padding-left:${props =>(props.paddingLeft ? props.paddingLeft:"")};
padding-right:${props =>(props.paddingRight ? props.paddingRight:"")};
float:${props =>(props.float ? props.float:"")};
text-align:${props=>props.textAlign?props.textAlign:""};
box-shadow:${props=>props.boxShadow?props.boxShadow:""};
font-weight:${props=>props.fontWeight?props.fontWeight:""};
transition:${props=>props.transition?props.transition:""};
justify-content: ${props=>props.justifyContent?props.justifyContent:""};
`
