import styled from '@emotion/styled';

export const FriendListCard = styled.ul`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  background-color: #ffffff;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 0;
  background-color: #ffffff;
  box-shadow: 5px 5px 15px 5px #37412d;
  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;

  :not(:last-child) {
  margin-bottom: 15px;
}

:hover,
:focus {
  opacity: 0.8;
  transition: opacity 250ms linear;
`;