import styled from "@emotion/styled";

export const Status = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 15px;
  border-radius: 50%;
  background-color: ${p => p.isOnline ? 'green' : 'red'};
`;

export const Avatar = styled.img`
  width: 60px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
`;