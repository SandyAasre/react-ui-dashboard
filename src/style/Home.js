import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 460px) {
    grid-template-columns: 100%;
  }
`;
export const BlockText = styled.div`
  display: block;
  color: ${(props) => (props.color ? props.color : "")};
  position: absolute;
  top: ${(props) => (props.top ? props.top : "")};
  left: ${(props) => (props.left ? props.left : "")};
  font-weight: 600;
`;

export const Block = styled.div`
  border-radius: 20px;
  border: 1px solid grey;
  margin: 10px;
  width: 200px;
  height: 200px;
  &:hover{
  background-image: linear-gradient(315deg, #4487d1 0%, #009ffd 74%);
  background: ${(props) => (props.background ? props.background : "")};

  }
  
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:grey;
  &>*{
    &:hover{
      color: white;
    }
  } 
  
`;

export const Upload = styled.div`
  position: absolute;
  width: 130px;
  top: 50px;
  right: 100px;
  display: grid;
  grid-template-columns: 30% 70%;
`;

export const Setting = styled.div`
  position: absolute;
  width: 130px;
  top: 50px;
  right: 100px;
  display: grid;
  grid-template-columns: 70% 30%;
`;


export const Ad = styled.div`
position:absolute;
top:230px;
right:50px;
`