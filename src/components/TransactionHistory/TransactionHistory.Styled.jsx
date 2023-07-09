import styled from 'styled-components';

export const StyledTransactionHistory = styled.table`
  width: 600px;
  margin-bottom: 100px;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  thead {
    background-color: aqua;
  }

  th {
    width: 200px;
    border: 1px solid #111;
    padding: 20px 0;
  }

  td {
    width: 200px;
    border: 1px solid #111;
    padding: 20px 0;
    font-size: 20px;
  }

  tr:nth-child(2n) {
    background-color: #ccc;
  }
`;

export const HeaderTab = styled.tr`
  background-color: aqua;
`;
