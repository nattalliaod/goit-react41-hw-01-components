import styled from "@emotion/styled";

export const Table = styled.table`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  text-align: center;
  margin: 40px auto;
`;

export const TableHeader = styled.th`
  width: 250px;
  height: 45px;
  padding: 10px 20px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  text-align: center;
  font-weight: 600;
  background-color: rgb(0, 140, 255);
  border: 1px solid black;
`;

export const TableData = styled.td`
   width: 250px;
  height: 45px;
  padding: 10px 20px;
  color: #3d3b3bf1;
  border: 1px solid black;
`;

export const TableRow = styled.tr`
  :nth-of-type(2n) {
  background-color: #cde2e0;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;