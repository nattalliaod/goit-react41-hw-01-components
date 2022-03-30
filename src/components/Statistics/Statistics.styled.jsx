import styled from '@emotion/styled';
import { randomColor } from 'utils';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 65px;
  background-color: ${randomColor};
`;

export const Label = styled.span`
  color: #fafafa;
`;

export const Percentage = styled.span`
  color: #fafafa;
`;