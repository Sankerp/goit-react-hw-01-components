import styled from 'styled-components';

export const StatisticsStyled = styled.section`
  width: 500px;
  border: 1px solid #111;
  text-align: center;
  margin: 0px auto;
  margin-bottom: 100px;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    color: white;
    display: flex;
    flex-direction: column;
    width: 120px;
    padding: 10px;
    font-size: 24px;
  }
`;
export const Title = styled.h2`
  /* margin: 0; */
  margin-bottom: 25px;
  padding-top: 25px;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatisticsLi = styled.li`
  background-color: ${({ color }) => color};
`;
