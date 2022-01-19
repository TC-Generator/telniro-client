import styled from "styled-components";

export const Container = styled.div`
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background: #11161e70;
    box-shadow: 0 5px 15px 1px #0000006e;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }

  direction: rtl;
  height: 50px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  font-size: 0.9em;
  background: black;
  box-shadow: 0 5px 15px 1px black;
  z-index: 999;
  position: sticky;
  top: 0;
  > a {
    padding: 0px 5px;
    margin: 0 5px;
    height: 100%;
    align-items: center;
    display: flex;
    white-space: pre;
  }
`;
