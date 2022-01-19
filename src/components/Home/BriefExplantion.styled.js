import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  text-align: center;
  height: 230px;
  background: #3f51b563;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 520px) {
    clip-path: polygon(30% 0%, 100% 0px, 100% 77%, 72% 98%, 0 76%, 0 1px);
  }

  .description {
    font-size: 1.3rem;
    direction: rtl;
    padding: 0 5px;
  }

  > a {
    /* bac  kground: #2196f373; */
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 30px;
    box-shadow: 0 5px 20px 4px #192350;
    font-size: 0.9rem;
    border: 1px solid transparent;
    transition: all 0.2s ease-in;
    &:hover,
    &:active {
      border: 1px solid #3f51b5;
      background: transparent;
      box-shadow: unset;
      color: #dddddd;
      transition: all 0.3s ease-in-out;
    }
  }
`;
