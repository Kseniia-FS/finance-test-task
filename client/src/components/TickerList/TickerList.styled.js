import styled from "@emotion/styled";

export const List = styled.table`
  border-collapse: collapse;
  margin: 25px auto;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const Item = styled.tr`
  padding: 12px 15px;

  height: 40px;

  border: 1px solid rgb(175, 173, 173);
  margin-bottom: 10px;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;

export const Title = styled.td`
  padding: 12px 15px;
`;
export const Price = styled.td`
  padding: 12px 15px;
`;
export const Percent = styled.td`
  padding: 12px 15px;
`;
export const Sum = styled.td`
  padding: 12px 15px;
`;
