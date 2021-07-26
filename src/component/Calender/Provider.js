import { Divider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ProviderS = styled("div")`
  box-shadow: 0px 1px 1px 1px #f2f2f2;
  padding: 10px;
  height: fit-content;
  min-width: 150px;
  width: auto;
`;
const PrviderHeader = styled("div")`
  color: #2196f3;
  font-size: 18px;
  border-bottom: 2px solid #2196f3;
  padding:10px;
`;
const TabS = styled("div")`
margin-top: 10px;
  min-height: 30px;
  height: fit-content;
  padding: 5px 20px;
  width: 100px;
  border-radius: 20px;
  &:hover {
    background-color: #f2f2f2;
  }
`;
var user = ["All users", "Tom Collins", "Smith,Billy", "Stone,Fred"];
export const Provider = () => {
  const data = user.map((data, index) => {
    return <TabS key={index}> {data}</TabS>;
  });
  console.log(data);
  return (
    <>
      <ProviderS>
        <PrviderHeader>Providers</PrviderHeader>
        <Divider/>
        {data}
      </ProviderS>
    </>
  );
};
