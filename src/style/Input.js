import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "")};
  height:${(props) => (props.height ? props.height : "30px")};
  border:2px solid #f2f2f2;
  border-radius: 5px;
  cursor:pointer;
  margin: ${(props) => (props.margin ? props.margin : "")};
  padding: 5px 5px 5px 15px;
  padding-left:${(props) => (props.paddingL ? props.paddingL : "")};
  display: ${(props) => (props.display ? props.display : "block")};
  font-size:16px ;
  &::hover, &:active, &:focus {
    border: 2px solid #808080;
    outline: none !important;
  }
  @media (max-width: 400px) {
    width:100% !important;
  }
  &::placeholder{
    font-size: ${(props) => (props.fontSizeP ? props.fontSizeP : "")};;
  }
`;

