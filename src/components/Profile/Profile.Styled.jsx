import styled from 'styled-components';

export const UserProfileStyled = styled.div`
  box-sizing: border-box;
  width: 500px;
  margin: 20px auto;
  margin-bottom: 100px;
  padding-top: 20px;
  text-align: center;
  border: 1px solid #111;
  color: #111;
  font-size: 20px;
  img {
    display: block;
    margin: 30px auto;
    width: 250px;
    border-radius: 50%;
    outline: 1px solid #111;
  }
`;
export const UserNameStyled = styled.p`
  color: #111;
  font-size: 40px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const UserStats = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 5px;
  background-color: #fff;
  li {
    width: 100%;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: beige;
  }
`;
export const UserStatsNumber = styled.span`
  font-weight: 700;
`;
