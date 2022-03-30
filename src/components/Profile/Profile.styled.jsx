import styled from '@emotion/styled';

export const UserProfile = styled.div`
  background: #fff;
  border-radius: 10px;
  max-width: 250px;
  padding: 30px 0 0;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 55px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(29, 15, 15, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const UserDescription = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  border-bottom: 1px solid #5a5858;
`;

export const Avatar = styled.img`
  margin-bottom: 20px;
  background-color: #a39f9f;
  border-radius: 50%;
  max-width: 50%;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
`;

export const Tag = styled.p`
  margin: 1px auto 10px auto;
  font-size: 14px;
  color: rgb(107, 104, 104);

  &:hover {
  color: red;
}
`;

export const Location = styled.p`
  margin: 10px auto 20px auto;
  font-size: 14px;
  color: #5a5858;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  width: 100%;
  font-size: 14px;
  color: #7e7b7b;
  background-color: #e9e6e6;
  
  :nth-of-type(2n) {
  border-right: 4px solid #b3adad;
  border-left: 4px solid #9e9e9e;
`;

export const Label = styled.span`
  color: black;
`;

export const Quantity = styled.span`
  margin-top: 4px;
  font-size: 15px;
  font-weight: 700;
  color: #1c0853;
`;