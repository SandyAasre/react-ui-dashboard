import { Link } from "react-router-dom";
const { default: styled } = require("styled-components");

export const Container = styled.div`
  width: 100%;
  min-height: 250px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
`;

export const Heading = styled.div`
  float: left;
  margin: 20px;
  color: #2196f3;
  font-size: 16px;
  font-weight: bold;
`;
export const Refresh = styled(Link)`
  float: right;
  margin: 20px;
  font-size: 12px !important;
  text-decoration: none;
  color: grey;
`;

export const Table = styled.table`
  width: 100%;
  padding: 0px 20px;
  text-align: center;
  border: none;
  th {
    padding: 0%;
    height: 50px;
    font-weight: 500;
    text-align: center;
    border: none;
  }
  td {
    border: none;
    height: 40px;
    font-weight: normal;
    text-align: center;
  }
  tr {
    &:hover {
      background-color: #f2f2f2;
    }
  }
`;
