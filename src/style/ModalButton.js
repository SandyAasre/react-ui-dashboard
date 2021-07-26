import styled from "styled-components";

export const ModalButton = styled.button`
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "45px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  outline: none;
  border: none;
  cursor:pointer;
  margin-top:${(props) => (props.marginTop ? props.marginTop : "")};
  margin-left:${(props) => (props.marginL ? props.marginL : "")};
  margin:${(props) => (props.margin ? props.margin : "")};
  color: ${(props) => (props.color ? props.color : "white")};
  background-color:${(props) => (props.backgroundColor ? props.backgroundColor : " #2a2a72")};;
  background-image:  ${(props) => (props.backgroundImage ? props.backgroundImage : "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)")} ;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "5px")};
  padding:${(props) => (props.padding ? props.padding : "")};
  float:${(props) => (props.float ? props.float : "")};
  @media (max-width: 400px) {
    width:108% !important;
  }
  &:hover{
    color:white;
    background-image:linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)
  }
`;