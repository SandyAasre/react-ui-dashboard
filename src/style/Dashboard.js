import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
`;

export const Column = styled.div`
  width: 30%;
  height: 50px;
  padding-left: 20px;
  display: grid;
  grid-template-columns: 50% 50%;
`;
export const Bold = styled.div`
  font-weight: 600;
  color: grey;
`;
export const Value = styled.div`
  font-size: 16px;
  color: grey;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
`;
export const CustomLink = styled(Link)`
  margin-top: 50px !important;
  width: auto;
  color: white;
  padding:10px 30px;
  border-radius: 20px;
  text-decoration: none;
  box-shadow:5px 5px 10px 1px grey;
  background-image: linear-gradient(315deg, #4487d1 0%, #009ffd 74%);
  float: right;
`;
