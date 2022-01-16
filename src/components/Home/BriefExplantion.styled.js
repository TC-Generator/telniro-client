import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  text-align: center;
  height: 230px;
  background: #3f51b5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 520px) {
    clip-path: polygon(50% 0%, 100% 0, 100% 86%, 75% 100%, 0 85%, 0 0);
  }

  .description {
    font-size: 1.3rem;
    direction: rtl;
    padding: 0 5px;
  }

  > a {
    background: #2196f3;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 30px;
    box-shadow: 0 5px 10px 7px #3747a5;
    font-size: 0.9rem;
    border: 1px solid transparent;
    transition: all 0.2s ease-in;
    &:hover,
    &:active {
      border: 1px solid #a3a3a3;
      background: transparent;
      box-shadow: unset;
      color: #dddddd;
      transition: all 0.3s ease-in-out;
    }
  }
`;
