import styled from "styled-components";

export const Container = styled.div`
  direction: rtl;
  height: 50px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  font-size: 0.9em;
  > a {
    padding: 0px 5px;
    margin: 0 5px;
    height: 100%;
    align-items: center;
    display: flex;
    white-space: pre;
  }
`;
