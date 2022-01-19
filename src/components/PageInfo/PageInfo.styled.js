import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 15px !important;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0 10px;
  height: 39px;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 9px;
  background: #090b10;
  direction: rtl;
  font-size: 0.9rem;
  box-shadow: 0 5px 10px #05070c;

  > .page {
    font-size: 1rem;
  }

  > .back {
    cursor: pointer;
  }
`;
