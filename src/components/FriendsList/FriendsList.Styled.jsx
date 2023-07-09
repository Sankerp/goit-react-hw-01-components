import styled from 'styled-components';

export const FriendsListStyled = styled.ul`
  box-sizing: border-box;
  width: 350px;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  li {
    width: 100%;
    padding: 20px 0;
    display: flex;
    align-items: center;
    gap: 40px;
    border: 1px solid #111;
    box-shadow: 0px 4px 4px 0px rgb(120, 120, 120);
  }
  span {
    padding-left: 30px;
  }
  p {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
  }
`;
